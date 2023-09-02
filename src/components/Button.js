export default function MyButton(props) {
  return (
    <a
      className={`btn btn-${props.color} btn-lg text-capitalize`}
      href={props.href}
      download={props.iSdownload}
    >
      {props.content}
    </a>
  );
}
