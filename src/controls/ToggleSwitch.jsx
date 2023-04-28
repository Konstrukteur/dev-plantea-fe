const ToggleSwitch = ({ textOn="ON", textOff="OFF", isOn=true, setIsOn, onChange }) => {
    function handleToggle() {
        const newValue = !isOn;
        setIsOn(newValue);
        onChange(newValue);
    }

    return (
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="toggle-switch" checked={isOn} onChange={handleToggle} />
            <label className="form-check-label" htmlFor="toggle-switch" style={{ width: '70px', textAlign: 'start' }}>
                {isOn ? textOn : textOff}
            </label>
        </div>
    );
};

export default ToggleSwitch;
