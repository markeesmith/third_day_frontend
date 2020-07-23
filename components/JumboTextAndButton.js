import Link from 'next/link';

const JumboTextAndButton = (props) => (
    <div>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
        <Link href={`${props.buttonRoute}`}>
            {props.buttonText}
        </Link>
    </div>
);

export default JumboTextAndButton;