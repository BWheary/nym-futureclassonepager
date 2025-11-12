import React, { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({
    playerName: 'Sample Player',
    className: '2025',
    bats: 'R',
    nationality: ''
  });

  const [metrics, setMetrics] = useState({
    oneHandProgression: 2,
    heavyBatSideToss: 2,
    insideFlips: 2,
    vsVelocity: 2,
    vsBreakingPitches: 2,
    batSpeed: 2,
    frame: 2
  });

  const [coachFeedback, setCoachFeedback] = useState('');
  const [qrCodeImage, setQrCodeImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSliderChange = (metricName, value) => {
    setMetrics(prev => ({ ...prev, [metricName]: parseInt(value) }));
  };

  const handleFeedbackChange = (e) => {
    setCoachFeedback(e.target.value);
  };

  const handleQrCodeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setQrCodeImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleClear = () => {
    setForm({
      playerName: '',
      className: '',
      bats: '',
      nationality: ''
    });
    setMetrics({
      oneHandProgression: 1,
      heavyBatSideToss: 1,
      insideFlips: 1,
      vsVelocity: 1,
      vsBreakingPitches: 1,
      batSpeed: 1,
      frame: 1
    });
    setCoachFeedback('');
    setQrCodeImage(null);
  };

  const handlePrint = () => {
    window.print();
  };

  const getSliderLabel = (value) => {
    if (value === 1) return 'Below Average';
    if (value === 2) return 'Average';
    return 'Above Average';
  };

  const getSliderPosition = (value) => {
    return ((value - 1) / 2) * 100;
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="brand">
          <div className="brand-mark">NY</div>
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
            <label className="field-label">Nationality</label>
            <select name="nationality" value={form.nationality} onChange={handleInputChange}>
              <option value="">Select nationality...</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="MX">Mexico</option>
              <option value="PR">Puerto Rico</option>
              <option value="DO">Dominican Republic</option>
              <option value="VE">Venezuela</option>
              <option value="CU">Cuba</option>
              <option value="JP">Japan</option>
              <option value="KR">South Korea</option>
              <option value="TW">Taiwan</option>
              <option value="AU">Australia</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div className="metric-section">
            <h3 className="section-title">Big Three Execution</h3>
            
            <div className="slider-field">
              <label className="slider-label">One Hand Progression</label>
              <div className="slider-container">
                <div className="slider-track">
                  <div 
                    className="slider-fill" 
                    style={{ width: `${getSliderPosition(metrics.oneHandProgression)}%` }}
                  >
                    <div className="slider-logo">NY</div>
                  </div>
                </div>
                <input
                  type="range"
                  min="1"
                  max="3"
                  value={metrics.oneHandProgression}
                  onChange={(e) => handleSliderChange('oneHandProgression', e.target.value)}
                  className="slider-input"
                />
                <div className="slider-labels">
                  <span>Below Average</span>
                  <span>Average</span>
                  <span>Above Average</span>
                </div>
              </div>
            </div>

            <div className="slider-field">
              <label className="slider-label">Heavy Bat Side Toss</label>
              <div className="slider-container">
                <div className="slider-track">
                  <div 
                    className="slider-fill" 
                    style={{ width: `${getSliderPosition(metrics.heavyBatSideToss)}%` }}
                  >
                    <div className="slider-logo">NY</div>
                  </div>
                </div>
                <input
                  type="range"
                  min="1"
                  max="3"
                  value={metrics.heavyBatSideToss}
                  onChange={(e) => handleSliderChange('heavyBatSideToss', e.target.value)}
                  className="slider-input"
                />
                <div className="slider-labels">
                  <span>Below Average</span>
                  <span>Average</span>
                  <span>Above Average</span>
                </div>
              </div>
            </div>

            <div className="slider-field">
              <label className="slider-label">Inside Flips</label>
              <div className="slider-container">
                <div className="slider-track">
                  <div 
                    className="slider-fill" 
                    style={{ width: `${getSliderPosition(metrics.insideFlips)}%` }}
                  >
                    <div className="slider-logo">NY</div>
                  </div>
                </div>
                <input
                  type="range"
                  min="1"
                  max="3"
                  value={metrics.insideFlips}
                  onChange={(e) => handleSliderChange('insideFlips', e.target.value)}
                  className="slider-input"
                />
                <div className="slider-labels">
                  <span>Below Average</span>
                  <span>Average</span>
                  <span>Above Average</span>
                </div>
              </div>
            </div>
          </div>

          <div className="metric-section">
            <h3 className="section-title">Batting Practice</h3>
            
            <div className="slider-field">
              <label className="slider-label">vs Velocity</label>
              <div className="slider-container">
                <div className="slider-track">
                  <div 
                    className="slider-fill" 
                    style={{ width: `${getSliderPosition(metrics.vsVelocity)}%` }}
                  >
                    <div className="slider-logo">NY</div>
                  </div>
                </div>
                <input
                  type="range"
                  min="1"
                  max="3"
                  value={metrics.vsVelocity}
                  onChange={(e) => handleSliderChange('vsVelocity', e.target.value)}
                  className="slider-input"
                />
                <div className="slider-labels">
                  <span>Below Average</span>
                  <span>Average</span>
                  <span>Above Average</span>
                </div>
              </div>
            </div>

            <div className="slider-field">
              <label className="slider-label">vs Breaking Pitches</label>
              <div className="slider-container">
                <div className="slider-track">
                  <div 
                    className="slider-fill" 
                    style={{ width: `${getSliderPosition(metrics.vsBreakingPitches)}%` }}
                  >
                    <div className="slider-logo">NY</div>
                  </div>
                </div>
            <input 
                  type="range"
                  min="1"
                  max="3"
                  value={metrics.vsBreakingPitches}
                  onChange={(e) => handleSliderChange('vsBreakingPitches', e.target.value)}
                  className="slider-input"
                />
                <div className="slider-labels">
                  <span>Below Average</span>
                  <span>Average</span>
                  <span>Above Average</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="metric-section">
            <h3 className="section-title">Physicality</h3>
            
            <div className="slider-field">
              <label className="slider-label">Bat Speed</label>
              <div className="slider-container">
                <div className="slider-track">
                  <div 
                    className="slider-fill" 
                    style={{ width: `${getSliderPosition(metrics.batSpeed)}%` }}
                  >
                    <div className="slider-logo">NY</div>
                  </div>
                </div>
                <input
                  type="range"
                  min="1"
                  max="3"
                  value={metrics.batSpeed}
                  onChange={(e) => handleSliderChange('batSpeed', e.target.value)}
                  className="slider-input"
                />
                <div className="slider-labels">
                  <span>Below Average</span>
                  <span>Average</span>
                  <span>Above Average</span>
                </div>
              </div>
            </div>

            <div className="slider-field">
              <label className="slider-label">Frame</label>
              <div className="slider-container">
                <div className="slider-track">
                  <div 
                    className="slider-fill" 
                    style={{ width: `${getSliderPosition(metrics.frame)}%` }}
                  >
                    <div className="slider-logo">NY</div>
                  </div>
                </div>
            <input 
                  type="range"
                  min="1"
                  max="3"
                  value={metrics.frame}
                  onChange={(e) => handleSliderChange('frame', e.target.value)}
                  className="slider-input"
                />
                <div className="slider-labels">
                  <span>Below Average</span>
                  <span>Average</span>
                  <span>Above Average</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="field">
            <label className="field-label">Coach Feedback / Notes</label>
            <textarea 
              value={coachFeedback} 
              onChange={handleFeedbackChange}
              rows="5"
              placeholder="Additional observations and recommendations..."
            />
          </div>
          
          <div className="field">
            <label className="field-label">QR Code Image</label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleQrCodeChange}
            />
          </div>
        </section>

        <section className="preview-pane">
          <div className="sheet">
            <div className="sheet-header">
              <div className="brand">
                <div className="brand-mark">NY</div>
                <h2>Future Class Focus Sheet</h2>
              </div>
              <div className="meta">
                <div>CLASS: {form.className || '2025'} BATS: {form.bats || 'R'} {form.playerName || 'Sample Player'}</div>
              </div>
            </div>

            <div className="sheet-body">
              <div className="performance-section">
                <h3 className="performance-title">BIG THREE EXECUTION</h3>
                <div className="performance-slider">
                  <div className="slider-track">
                    <div 
                      className="slider-fill" 
                      style={{ width: `${getSliderPosition(metrics.oneHandProgression)}%` }}
                    >
                      <div className="slider-logo">NY</div>
                    </div>
                  </div>
                  <div className="slider-label-preview">One Hand Progression</div>
                </div>
                <div className="performance-slider">
                  <div className="slider-track">
                    <div 
                      className="slider-fill" 
                      style={{ width: `${getSliderPosition(metrics.heavyBatSideToss)}%` }}
                    >
                      <div className="slider-logo">NY</div>
                    </div>
                  </div>
                  <div className="slider-label-preview">Heavy Bat Side Toss</div>
                </div>
                <div className="performance-slider">
                  <div className="slider-track">
                    <div 
                      className="slider-fill" 
                      style={{ width: `${getSliderPosition(metrics.insideFlips)}%` }}
                    >
                      <div className="slider-logo">NY</div>
                    </div>
                  </div>
                  <div className="slider-label-preview">Inside Flips</div>
                </div>
              </div>

              <div className="performance-section">
                <h3 className="performance-title">BATTING PRACTICE</h3>
                <div className="performance-slider">
                  <div className="slider-track">
                    <div 
                      className="slider-fill" 
                      style={{ width: `${getSliderPosition(metrics.vsVelocity)}%` }}
                    >
                      <div className="slider-logo">NY</div>
                    </div>
                  </div>
                  <div className="slider-label-preview">vs Velocity</div>
                </div>
                <div className="performance-slider">
                  <div className="slider-track">
                    <div 
                      className="slider-fill" 
                      style={{ width: `${getSliderPosition(metrics.vsBreakingPitches)}%` }}
                    >
                      <div className="slider-logo">NY</div>
              </div>
            </div>
                  <div className="slider-label-preview">vs Breaking Pitches</div>
                </div>
              </div>

              <div className="performance-section">
                <h3 className="performance-title">PHYSICALITY</h3>
                <div className="performance-slider">
                  <div className="slider-track">
                    <div 
                      className="slider-fill" 
                      style={{ width: `${getSliderPosition(metrics.batSpeed)}%` }}
                    >
                      <div className="slider-logo">NY</div>
                    </div>
                  </div>
                  <div className="slider-label-preview">Bat Speed</div>
                </div>
                <div className="performance-slider">
                  <div className="slider-track">
                    <div 
                      className="slider-fill" 
                      style={{ width: `${getSliderPosition(metrics.frame)}%` }}
                    >
                      <div className="slider-logo">NY</div>
                    </div>
                  </div>
                  <div className="slider-label-preview">Frame</div>
                </div>
              </div>

              {coachFeedback && (
                <div className="feedback-section">
                  <h3 className="performance-title">COACH FEEDBACK</h3>
                  <div className="feedback-content">{coachFeedback}</div>
                </div>
              )}

              {qrCodeImage && (
                <div className="qr-section">
                  <img src={qrCodeImage} alt="QR Code" className="qr-image" />
            </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
