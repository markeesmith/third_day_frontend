import Link from 'next/link';

const JumboTextAndPhoto = (props) => (
    <div>
        <div>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
        <img 
        src={`${props.photoSrc}`}
        />
    </div>
);

export default JumboTextAndPhoto;