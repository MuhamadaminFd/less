import { useState } from 'react';
import { Counter, Header, Users } from './components';

const App = () => {
    const [isChangedColor, setIsChangedColor] = useState(false);
    return (
        <div>
            <Header isChangedColor={isChangedColor}/>
            <Counter setIsChangedColor={setIsChangedColor}/>
            <hr/>
            <Users/>
        </div>
    );
}

export default App;
