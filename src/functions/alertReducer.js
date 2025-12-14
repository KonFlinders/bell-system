function alertReducer (alerts, action) {
  switch (action.action) {
    case 'ADD': {
      return [...alerts, {
        id: action.id,
        level: action.level,
        text: action.text
      }];
    }

    case 'DISMISS': {
      return alerts.filter( alert => alert.id !== action.id );
    }

    case 'DISMISS_ALL': {
      return [];
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default alertReducer;