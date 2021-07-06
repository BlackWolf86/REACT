import "./Sales.css";
interface SalesProps {
    category?: string;
    percent: number;
}
function Sales(props: SalesProps): JSX.Element {
    return (
        <div className="Sales Box">
            <span>Only now! all&nbsp;{props.category || 'items'} with discount of {props.percent}% WoHo</span>
        </div>
    );
}

export default Sales;
