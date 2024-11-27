import { Link } from 'react-router-dom';
import 'src/components/LinksSection/LinksSection.css';

const LinksSection = (props) => {
  // eslint-disable-next-line react/prop-types
  const { link, title } = props;
  return <Link to={link}>{title}</Link>;
};

export default LinksSection;
