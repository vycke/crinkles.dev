import React from 'react';
import PropTypes from 'prop-types';

const Toggle = ({ checked, onClick, icons, label }) => {
  const [check, setCheck] = React.useState(checked);

  const handleClick = (e) => {
    e.preventDefault();
    onClick(!check);
  };

  React.useEffect(() => {
    setCheck(checked);
  }, [checked]);

  return (
    <label className="toggle" data-state={check}>
      {icons && icons.map((I, i) => <I key={i} />)}
      <div className="thumb" />
      <input
        type="checkbox"
        checked={check}
        onChange={handleClick}
        aria-label={label}
      />
    </label>
  );
};

Toggle.defaultProps = {
  className: ''
};

Toggle.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func
};

export default Toggle;
