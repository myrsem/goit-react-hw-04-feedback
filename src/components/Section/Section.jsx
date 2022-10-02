import { StatisticSection } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
    return (
      <StatisticSection>
        <h1>{title}</h1>
        {children}
      </StatisticSection>
    );
  }

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;