import { GameService } from './game.service';

describe('GameService', () => {
  let svc: GameService;

  beforeEach(() => {
    svc = new GameService();
  });

  it('starts with empty board and X first', () => {
    expect(svc.board().every(c => c === null)).toBeTrue();
    expect(svc.currentPlayer()).toBe('X');
    expect(svc.winner()).toBeNull();
  });

  it('alternates players on valid moves', () => {
    svc.makeMove(0);
    expect(svc.board()[0]).toBe('X');
    expect(svc.currentPlayer()).toBe('O');
    svc.makeMove(1);
    expect(svc.board()[1]).toBe('O');
    expect(svc.currentPlayer()).toBe('X');
  });

  it('detects a winning line', () => {
    svc.makeMove(0); // X
    svc.makeMove(3); // O
    svc.makeMove(1); // X
    svc.makeMove(4); // O
    svc.makeMove(2); // X wins row 0
    expect(svc.winner()).toBe('X');
  });

  it('reset clears game', () => {
    svc.makeMove(0);
    svc.reset();
    expect(svc.board().every(c => c === null)).toBeTrue();
    expect(svc.currentPlayer()).toBe('X');
    expect(svc.winner()).toBeNull();
  });
});
