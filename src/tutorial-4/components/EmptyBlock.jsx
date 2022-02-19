import ghostImg from '../assets/ghost.jpeg';

export const EmptyBlock = () => {
  return (
    <div className="block empty-block">
      <img src={ghostImg} width="50px" height="50px" alt="ghost" />
      <h2>Список фраз пустой</h2>
      <p>Чтобы в этом списке появилась фраза, тебе необходимо нажать на кнопку “Сгенерировать”</p>
    </div>
  );
};
