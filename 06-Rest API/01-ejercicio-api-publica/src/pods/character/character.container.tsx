import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { characterApi } from '#core/api/character.api';
import { useCharacter } from './character.hook';
import { CharacterComponent } from './character.component';
import { CharacterDetail } from './character.vm';

export const CharacterContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { character, setCharacter, loadCharacter, loading } = useCharacter(id || '');
  const navigate = useNavigate();
  const [canEdit, setCanEdit] = React.useState(false);

  React.useEffect(() => {
    if (id) {
      loadCharacter();
      // Verificar si estamos usando json-server (para habilitar edición)
      // En producción, esto se haría con una variable de entorno
      setCanEdit(true); // Por ahora habilitamos siempre
    }
  }, [id]);

  const handleBack = () => {
    navigate(linkRoutes.characterCollection);
  };

  const handleSave = async (updatedCharacter: CharacterDetail) => {
    try {
      await characterApi.updateCharacter(id || '', {
        id: parseInt(id || '0'),
        bestSentences: updatedCharacter.bestSentences,
      });
      
      // Actualizar el estado local
      setCharacter(updatedCharacter);
      
      alert('Best sentences saved successfully!');
    } catch (error) {
      console.error('Error saving character:', error);
      alert('Failed to save. Make sure json-server is running and USE_JSON_SERVER is set to true in character.api.ts');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <CharacterComponent 
      character={character} 
      onBack={handleBack} 
      onSave={handleSave}
      canEdit={canEdit}
    />
  );
};
