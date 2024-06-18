import { AccessProvider } from './Contexts/AcessContext';
import DisplayContainer from './Containers/DisplayContainer';

const App = () => {
    return (
        <>
            <AccessProvider>
                <DisplayContainer />
            </AccessProvider>
        </>
    );
};

export default App;
