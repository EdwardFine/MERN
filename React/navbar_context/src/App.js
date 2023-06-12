import './App.css';
import FormWrapper from './components/FormWrapper';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className='App'>
      <Wrapper>
        <Navbar />
        <FormWrapper>
          <Form/>
        </FormWrapper>
      </Wrapper>
    </div>
  );
}

export default App;
