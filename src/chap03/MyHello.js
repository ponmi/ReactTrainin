import PropTypes from 'prop-types';

// export default function MyHello(props) {
//   return (
//     // <div>こんにちは、{props.myName}さん！</div>
//     <div>こんにちは、{props.myName}さん！</div>
//   );
// }

export default function MyHello({ myName = '権兵衛'}) {
  return (
    <div>こんにちは、{myName}さん！</div>
  );
}

// function MyHello(props) {
//   return (
//     <div>こんにちは、{props.myName}さん！</div>
//   );
// }

// MyHello.propTypes = {
//   myName: PropTypes.string.isRequired
// };

// export default MyHello;