function App() {
  const resize = () => {
    console.log(window);
    window.Main.Resize('maximum');
  };

  return (
    <div
      style={{ backgroundColor: '#000', width: '193px', height: '37px', color: 'white', borderRadius: '1000px' }}
      onClick={resize}
    >
      dynamic island
    </div>
  );
}

export default App;
