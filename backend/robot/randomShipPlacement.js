// Função para posicionar aleatoriamente os navios da IA no tabuleiro
export function randomizeOpponentShips(board) {
    try {
      // Configuração dos navios a serem posicionados
      const shipsToPlace = [
        { type: 'porta-avioes', length: 6 },
        { type: 'navio-de-guerra', length: 4 },
        { type: 'encouracado', length: 3 },
        { type: 'encouracado', length: 3 },
        { type: 'submarino', length: 1 }
      ];
  
      // Resetar o tabuleiro antes de posicionar os navios
      board.resetBoard();
  
      // Posicionar cada navio
      for (const ship of shipsToPlace) {
        let placed = false;
        let attempts = 0;
        const maxAttempts = 100; // Limite de tentativas para evitar loop infinito
  
        while (!placed && attempts < maxAttempts) {
          attempts++;
          
          // Gerar posição e direção aleatórias
          const row = Math.floor(Math.random() * 10);
          const column = Math.floor(Math.random() * 10);
          const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
  
          try {
            // Tentar adicionar o navio na posição gerada
            board.addShip({
              type: ship.type,
              row,
              column,
              direction
            });
            
            // Se chegou aqui, o navio foi posicionado com sucesso
            placed = true;
            console.log(`Navio ${ship.type} posicionado com sucesso em (${row}, ${column}), direção ${direction}`);
          } catch (error) {
            // Posição inválida, tentar novamente
            continue;
          }
        }
  
        // Se não conseguiu posicionar após várias tentativas
        if (!placed) {
          console.error(`Não foi possível posicionar o navio ${ship.type} após ${maxAttempts} tentativas`);
          return { success: false, message: `Falha ao posicionar o navio ${ship.type}` };
        }
      }
  
      console.log("Todos os navios da IA posicionados com sucesso!");
      return { success: true, message: "Navios da IA posicionados aleatoriamente com sucesso!" };
    } catch (error) {
      console.error("Erro ao posicionar navios da IA:", error);
      return { success: false, message: error.message };
    }
  }
  
  // Função para estratégias de posicionamento mais avançadas (variantes podem ser implementadas no futuro)
  export function placeShipsWithStrategy(board) {
    // Por enquanto, usa o posicionamento aleatório
    return randomizeOpponentShips(board);
  }