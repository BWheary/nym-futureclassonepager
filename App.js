import React, { useState } from 'react';
import './App.css';

const drillNames = {
  'drill1': 'Step-Back Coil',
  'drill2': 'Hips Lead Soft Toss', 
  'drill3': 'Launch Position Check',
  'drill4': 'High Tee Middle',
  'drill5': 'Opposite-Field Front Toss'
};

function App() {
  const [form, setForm] = useState({
    playerName: '',
    playerEmail: '',
    className: '',
    bats: '',
    drill: '',
    goal: '',
    cue: '',
    description: '',
    coachName: ''
  });
  const [playerImage, setPlayerImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setPlayerImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleClear = () => {
    setForm({
      playerName: '',
      playerEmail: '',
      className: '',
      bats: '',
      drill: '',
      goal: '',
      cue: '',
      description: '',
      coachName: ''
    });
    setPlayerImage(null);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="brand">
          <div className="brand-mark"></div>
          <h1>Future Class Focus Sheet</h1>
        </div>
        <div className="actions">
          <button onClick={handleClear} className="btn secondary">Clear</button>
          <button onClick={handlePrint} className="btn primary">Export PDF</button>
        </div>
      </header>

      <div className="layout">
        <section className="form-pane">
          <div className="field">
            <label className="field-label">Player Name</label>
            <input 
              name="playerName" 
              value={form.playerName} 
              onChange={handleInputChange}
              placeholder="Enter player name"
            />
          </div>
          
          <div className="field">
            <label className="field-label">Player Email</label>
            <input 
              name="playerEmail" 
              type="email"
              value={form.playerEmail} 
              onChange={handleInputChange}
              placeholder="Enter player email"
            />
          </div>
          
          <div className="grid-2">
            <div className="field">
              <label className="field-label">Class</label>
              <input 
                name="className" 
                value={form.className} 
                onChange={handleInputChange}
                placeholder="Class name"
              />
            </div>
            <div className="field">
              <label className="field-label">Bats</label>
              <input 
                name="bats" 
                value={form.bats} 
                onChange={handleInputChange}
                placeholder="R/L/S"
              />
            </div>
          </div>
          
          <div className="field">
            <label className="field-label">Drill</label>
            <select name="drill" value={form.drill} onChange={handleInputChange}>
              <option value="">Select a drill…</option>
              <option value="drill1">Step-Back Coil</option>
              <option value="drill2">Hips Lead Soft Toss</option>
              <option value="drill3">Launch Position Check</option>
              <option value="drill4">High Tee Middle</option>
              <option value="drill5">Opposite-Field Front Toss</option>
            </select>
          </div>
          
          <div className="field">
            <label className="field-label">Goal</label>
            <input 
              name="goal" 
              value={form.goal} 
              onChange={handleInputChange}
              placeholder="What's the goal?"
            />
          </div>
          
          <div className="field">
            <label className="field-label">Cue</label>
            <input 
              name="cue" 
              value={form.cue} 
              onChange={handleInputChange}
              placeholder="Key cue for player"
            />
          </div>
          
          <div className="field">
            <label className="field-label">Description / Feedback</label>
            <textarea 
              name="description" 
              rows="5"
              value={form.description} 
              onChange={handleInputChange}
              placeholder="Detailed feedback..."
            />
          </div>
          
          <div className="field">
            <label className="field-label">Coach Name</label>
            <input 
              name="coachName" 
              value={form.coachName} 
              onChange={handleInputChange}
              placeholder="Coach name"
            />
          </div>
          
          <div className="field">
            <label className="field-label">Player Visual (image)</label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange}
            />
          </div>
        </section>

        <section className="preview-pane">
          <div className="sheet">
            <div className="sheet-header">
              <div className="brand">
                <div className="brand-mark"></div>
                <h2>Future Class Focus Sheet</h2>
              </div>
              <div className="meta">
                <div><span>CLASS:</span> {form.className}</div>
                <div><span>BATS:</span> {form.bats}</div>
                <div><span>PLAYER NAME:</span> {form.playerName}</div>
              </div>
            </div>

            <div className="sheet-body">
              <div className="left">
                <div className="row">
                  <span className="label">GOAL:</span>
                  <div className="value">{form.goal}</div>
                </div>
                <div className="row">
                  <span className="label">CUE:</span>
                  <div className="value">{form.cue}</div>
                </div>
                <div className="row desc">
                  <span className="label">DESCRIPTION</span>
                  <div className="value">{form.description}</div>
                </div>
              </div>
              <div className="right">
                <div className="what">WHAT?</div>
                <div className="drill">DRILL: {drillNames[form.drill] || ''}</div>
              </div>
            </div>

            <div className="sheet-footer">
              <div className="image-box">
                {playerImage ? (
                  <img src={playerImage} alt="player" />
                ) : (
                  <div className="placeholder">Player visual</div>
                )}
              </div>
              <div className="image-box">
                <div className="placeholder">Drill visual</div>
              </div>
            </div>
            <div className="signature">
              <span>Coach:</span> {form.coachName}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
