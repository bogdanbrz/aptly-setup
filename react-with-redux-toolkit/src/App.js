import { counterActions } from "./store/counter-slice";
import { uiActions } from "./store/ui-slice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./App.module.css";

function App() {
    const dispatch = useDispatch();
    const toggleHandler = () => {
        dispatch(uiActions.toggleCounter());
    };
    const incrementHandler = () => {
        dispatch(counterActions.increment());
    };
    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };
    const resetHandler = () => {
        dispatch(counterActions.reset(0));
    };
    const showCounter = useSelector((state) => state.ui.showCounter);
    const counter = useSelector((state) => state.counter.counter);
    return (
        <div className={styles.app}>
            <button onClick={toggleHandler}>
                {showCounter ? "Hide" : "Show"} Counter
            </button>
            {showCounter && (
                <div>
                    <h1>Counter: {counter}</h1>
                    <button onClick={incrementHandler}>+</button>
                    <button onClick={decrementHandler}>-</button>
                    <button onClick={resetHandler}>reset</button>
                </div>
            )}
        </div>
    );
}

export default App;
