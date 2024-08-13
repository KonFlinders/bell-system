import React from 'react';

function SettingsPage() {
  return (
    <div className='SettingsPage'>
      <div className='Sidebar'>
        <li>bell-system-1</li>
        <li>bell-system-2</li>
        <li>bell-system-3</li>
      </div>
      <div className='Settings'>
        <div className='SettingsSection'>
          <h1>Set Schedule</h1>
            <div className='SettingsList'>
              <li>setting 1</li>
              <li>setting 1</li>
              <li>setting 1</li>
              <li>setting 1</li>
              <li>setting 1</li>
              <li>setting 1</li>
              <li>setting 1</li>
              <li>setting 1</li>
              <li>setting 1</li>
            </div>
        </div>
        <div className='SettingsSection'>
          <h1>Other Settings</h1>
            <div className='SettingsList'>
              <li>setting 1</li>
              <li>setting 1</li>
              <li>setting 1</li>
              <li>setting 1</li>
              <li>setting 1</li>
              <li>setting 1</li>
              <li>setting 1</li>
              <li>setting 1</li>
              <li>setting 1</li>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage;