function useConfrim(message = "", Callback) {
    if (Callback && typeof Callback !== "function") {
        return;
    }
    const ConfrimAction = () => {
        if (window.confirm(message)) {
            Callback();
        }
    };

    return ConfrimAction;
}

export { useConfrim };
