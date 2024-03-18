const generateClassName = (props) => {
  let className = `p-4 rounded-md elevation-3`;
  if (props.className && props.className.length) {
    className += ` ${props.className}`;
  }

  if (props.isTransparent !== true && props.hasCustomBackground !== true) {
    className += ' bg-white';
  }

  return className;
};

const Card = (props) => (
  <div className={generateClassName(props)}>{props.children}</div>
);

export default Card;
