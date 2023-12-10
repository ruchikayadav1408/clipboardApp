import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const onPaste = (e) => {
    const clipboardData = e.clipboardData;
    const text = clipboardData.getData("text/plain");
    setValue(text);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        readOnly={true}
        onPaste={onPaste}
      />
    </div>
  );
}

export default App;
