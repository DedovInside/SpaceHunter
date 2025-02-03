import type { FC } from 'react';
import './ModalWindow.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    icon?: string;
}

export const ModalWindow: FC<ModalProps> = ({isOpen, onClose, title, children, icon}: ModalProps) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <div className="modal-title-container">
                        {icon && <img src={icon} alt={title} className="modal-header-icon" />}
                        <h2 className="modal-title">{title}</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="modal-close-button"
                    >
                        X
                    </button>
                </div>
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    );
}