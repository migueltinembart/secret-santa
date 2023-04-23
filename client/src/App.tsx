import Box from "./components/Box";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex flex-row justify-center items-center">
        <Box split={true}>
          <div>Test</div>
          <div>Test</div>
        </Box>
      </div>
    </>
  );
}

export default App;
