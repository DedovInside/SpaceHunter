import type { FC } from 'react';

interface ModalProps {
    isOpen : boolean;
    onClose : () => void;
    title : string;
    children : React.ReactNode;
}

export const ModalWindow: FC<ModalProps> = ({isOpen, onClose, title, children} : ModalProps) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-gray-900 rounded-lg w-11/12 max-w-md max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between p-4 border-b border-gray-800">
                    <h2 className="text-lg font-semibold text-white">{title}</h2>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-gray-800 rounded-full transition-colors"
                    >
                        X
                    </button>
                </div>
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
}