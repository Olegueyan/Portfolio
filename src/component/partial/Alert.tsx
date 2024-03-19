import { Component } from "react";

class Alert extends Component<{ type: any, message: any, onClose: any }>
{
    render()
    {
        let { type, message, onClose } = this.props;

        const handleClose = () => onClose();

        return (
          <div className={`Alert -${type}`}>
              <span className="Alert_message">{message}</span>
              <span className="Alert_close mr-2" onClick={handleClose}></span>
          </div>
        );
    }
}

export default Alert;