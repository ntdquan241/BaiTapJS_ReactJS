import React from 'react';
import './StatusBadge.css';

function StatusBadge(props) {
  const { status } = props;
  const dynamicClassName = `badge ${status}`;

  return (
    <span className={dynamicClassName}>
      {status}
    </span>
  );
}

export default StatusBadge;