import './style.css';
import GameLogic from './modules/GameLogic';
import DOMController from './modules/DOMcontroller';

const logic = new GameLogic();
const controller = new DOMController(logic);
const restartBtn = document.querySelector('.restart');
restartBtn.addEventListener('click', () => controller.resetBoards());
controller.renderHumanBoard();
controller.renderComputerBoard();