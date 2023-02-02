import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBarComponent({percentage}) {
  return <ProgressBar now={percentage} label={`${percentage}%`}/>;
}


export default ProgressBarComponent;