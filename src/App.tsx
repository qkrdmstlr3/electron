import { appStyle } from './style.css';

function App() {
  const resize = () => {
    console.log(window);
    window.Main.Resize('maximum');
  };

  return (
    <div className={appStyle} onClick={resize}>
      dynamic island
    </div>
  );
}

export default App;
