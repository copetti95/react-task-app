import React, { useState, useEffect } from "react";
import TaskList from './TaskList'

const DeleteTaskButton = ({ tasks,  onDelete }) => {
  const handleClick = (tasks) => {
    onDelete(task.id);
  };

  return <button onClick={handleClick}>Delete</button>;
};

export default DeleteTaskButton;