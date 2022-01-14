let tasks = ['Я хочу сделать список задач'];

function render() {
  const ul = document.querySelector('.list');
  ul.innerHTML = '';

  tasks.forEach((item, index) => {
    ul.innerHTML += `
    <li>${item}<button onclick="handleClickRemove(${index})">x</button></li>
    `;
  });
}

const handleClickRemove = (index) => {
  tasks.splice(index, 1);
  render();
};

const handleClickAdd = () => {
  const value = document.querySelector('input').value;

  if (value) {
    tasks.push(value);
    document.querySelector('input').value = '';
  }
  render();
};

window.onload = () => {
  render();
};
