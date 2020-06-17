import Link from 'next/link';

const JumboTextOnly = (props) => (
    <div>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
    </div>
);

export default JumboTextOnly;