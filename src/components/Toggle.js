import React from 'react';
import PropTypes from 'prop-types';

const Toggle = ({ checked, onClick, icons, label }) => {
  const [check, setCheck] = React.useState(checked);

  const handleClick = () => {
    if (onClick) onClick(!check);
    setCheck(!check);
  };

  React.useEffect(() => {
    setCheck(checked);
  }, [checked]);

  return (
    <label className="toggle" data-state={check ? 'checked' : 'unchecked'}>
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
  className: '',
  checked: false
};

Toggle.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func
};

export default Toggle;
