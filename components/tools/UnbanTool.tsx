'use client';

import React, { useState, useEffect } from 'react';
import { accountAppeals, groupAppeals, emailMap, groupAppealHelpers } from '@/lib/appealData';

// --- THE FIX IS HERE: More specific types for our state ---
type BanType = 'normal' | 'permanent';
type PromptKey = '1' | '2' | '3';

const UnbanTool = () => {
    const [activeTab, setActiveTab] = useState('account');
    const [isLoading, setIsLoading] = useState(false);
    
    // State for Account Unban Form with specific types
    const [accountNumber, setAccountNumber] = useState('');
    const [whatsappType, setWhatsappType] = useState('regular');
    const [phoneType, setPhoneType] = useState('android');
    const [banType, setBanType] = useState<BanType>('normal');
    const [accountPrompt, setAccountPrompt] = useState<PromptKey>('1');

    // State for Group Unban Form with specific types
    const [groupLink, setGroupLink] = useState('');
    const [groupType, setGroupType] = useState('personal');
    const [groupSize, setGroupSize] = useState('small');
    const [groupPrompt, setGroupPrompt] = useState<PromptKey>('1');

    // State for Permanent Unban Form
    const [permanentNumber, setPermanentNumber] = useState('');
    
    useEffect(() => {
        // Any setup logic can go here
    }, []);

    const showSuccessNotification = (message: string) => {
        const notification = document.getElementById('success-notification');
        if (notification) {
            notification.innerHTML = `<i class="fas fa-check-circle mr-2"></i> ${message}`;
            notification.style.display = 'flex';
            setTimeout(() => notification.classList.add('show'), 10);
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => { notification.style.display = 'none'; }, 500);
            }, 5000);
        }
    };
    
    const addLogToHistory = (type: string) => {
        const newLog = { id: Date.now(), date: new Date().toISOString(), type, status: 'Sent' as const };
        try {
            const history = JSON.parse(localStorage.getItem('banAppealHistory') || '[]');
            localStorage.setItem('banAppealHistory', JSON.stringify([newLog, ...history]));
            window.dispatchEvent(new Event('storageUpdated'));
        } catch (e) {
            console.error("Failed to update appeal history:", e);
        }
    };

    const handleSendRequest = (type: 'Account' | 'Group' | 'Permanent') => {
        setIsLoading(true);
        let mailto = '';
        
        if (type === 'Account') {
            if (!accountNumber.startsWith('+') || accountNumber.length < 8) {
                alert('Please enter a valid number, e.g., +1234567890');
                setIsLoading(false); return;
            }
            // --- THIS LINE IS NOW TYPE-SAFE ---
            let message = accountAppeals[banType][accountPrompt]; 
            message = message.replaceAll('NUMBER_HERE', accountNumber);
            const recipientEmail = emailMap[whatsappType][phoneType];
            const subject = encodeURIComponent('Account Unban Appeal - BanBreaker');
            mailto = `mailto:${recipientEmail}?subject=${subject}&body=${encodeURIComponent(message)}`;
            addLogToHistory('Account');
        }

        if (type === 'Group') {
             if (!groupLink.includes('chat.whatsapp.com/')) {
                alert('Please enter a valid WhatsApp group invite link.');
                setIsLoading(false); return;
            }
            // --- THIS LINE IS NOW TYPE-SAFE ---
            let message = groupAppeals[groupPrompt];
            message = message.replace('GROUP_LINK_HERE', groupLink)
                             .replace('[explain purpose]', groupAppealHelpers.getGroupPurpose(groupType))
                             .replace('[number]', groupAppealHelpers.getGroupSizeNumber(groupSize));
            const recipientEmail = 'support@support.whatsapp.com';
            const subject = encodeURIComponent('Group Unban Appeal - BanBreaker');
            mailto = `mailto:${recipientEmail}?subject=${subject}&body=${encodeURIComponent(message)}`;
            addLogToHistory('Group');
        }

        if (type === 'Permanent') {
             if (!permanentNumber.startsWith('+') || permanentNumber.length < 8) {
                alert('Please enter your WhatsApp number for the permanent appeal.');
                setIsLoading(false); return;
            }
            const permanentAppealTemplate = `Subject: URGENT: Formal Appeal of Permanent Ban - Legal Compliance Required\n\nI formally appeal my permanent ban for number ${permanentNumber}. This action has caused catastrophic personal and professional impacts. I demand immediate human review and account restoration within 72 hours as per digital service regulations.\n\nEmergency Contact: ${permanentNumber}`;
            const supportEmails = ['support@support.whatsapp.com', 'smb_web@support.whatsapp.com', 'security@whatsapp.com', 'jan@whatsapp.com', 'brian@whatsapp.com'];
            mailto = `mailto:${supportEmails.join(',')}?subject=${encodeURIComponent('URGENT: Formal Appeal of Permanent Ban - Legal Compliance Required')}&body=${encodeURIComponent(permanentAppealTemplate)}`;
            addLogToHistory('Permanent');
        }

        setTimeout(() => {
            window.location.href = mailto;
            setIsLoading(false);
            showSuccessNotification(`${type} appeal prepared! Opening your email client...`);
        }, 1500);
    };

    return (
        <>
            <div className="container">
                <h1 className="font-orbitron">
                    <i className="fab fa-whatsapp heading-icon floating"></i>
                    <span className="glow">BAN BREAKER</span>
                </h1>

                <div className="stats-container">
                    <div className="stat"><div className="stat-value">98%</div><div className="stat-label">Success Rate</div></div>
                    <div className="stat"><div className="stat-value">24h</div><div className="stat-label">Avg. Response</div></div>
                    <div className="stat"><div className="stat-value">10K+</div><div className="stat-label">Accounts Restored</div></div>
                </div>

                <div className="tab-container">
                    <button className={`tab ${activeTab === 'account' ? 'active' : ''}`} onClick={() => setActiveTab('account')}>ACCOUNT UNBAN</button>
                    <button className={`tab ${activeTab === 'group' ? 'active' : ''}`} onClick={() => setActiveTab('group')}>GROUP UNBAN</button>
                    <button className={`tab ${activeTab === 'permanent' ? 'active' : ''}`} onClick={() => setActiveTab('permanent')}>PERMANENT UNBAN</button>
                </div>

                <div id="account-tab" className={`tab-content ${activeTab === 'account' ? 'active' : ''}`}>
                    <div className="form-grid-container">
                        <div>
                            <h2>WHATSAPP TYPE</h2>
                            <select value={whatsappType} onChange={e => setWhatsappType(e.target.value)}><option value="regular">REGULAR</option><option value="business">BUSINESS</option><option value="accessibility">ACCESSIBILITY</option></select>
                            <h2>PHONE TYPE</h2>
                            <select value={phoneType} onChange={e => setPhoneType(e.target.value)}><option value="android">ANDROID</option><option value="iphone">IPHONE</option></select>
                            <h2>BAN TYPE</h2>
                            <select value={banType} onChange={e => setBanType(e.target.value as BanType)}><option value="normal">NORMAL BAN</option><option value="permanent">PERMANENT BAN</option></select>
                        </div>
                        <div>
                            <h2>ENTER NUMBER</h2>
                            <input type="text" value={accountNumber} onChange={e => setAccountNumber(e.target.value)} placeholder="eg: +15551234567" />
                            <h2>APPEAL TEMPLATE</h2>
                            <select value={accountPrompt} onChange={e => setAccountPrompt(e.target.value as PromptKey)}><option value="1">Template 1 - Standard</option><option value="2">Template 2 - Professional</option><option value="3">Template 3 - Detailed</option></select>
                        </div>
                    </div>
                    <div className="button-container">
                        <button onClick={() => handleSendRequest('Account')} disabled={isLoading}>
                            <i className="fas fa-paper-plane mr-2"></i>
                            {isLoading ? 'PREPARING...' : 'SEND ACCOUNT UNBAN REQUEST'}
                            {isLoading && <div className="spinner" style={{display: 'inline-block'}}></div>}
                        </button>
                    </div>
                </div>

                <div id="group-tab" className={`tab-content ${activeTab === 'group' ? 'active' : ''}`}>
                   <div className="form-grid-container">
                        <div>
                            <h2>GROUP TYPE</h2>
                            <select value={groupType} onChange={e => setGroupType(e.target.value)}><option value="personal">Personal Group</option><option value="business">Business Group</option><option value="community">Community Group</option></select>
                            <h2>GROUP SIZE</h2>
                            <select value={groupSize} onChange={e => setGroupSize(e.target.value)}><option value="small">Small (1-50)</option><option value="medium">Medium (51-200)</option><option value="large">Large (201+)</option></select>
                        </div>
                        <div>
                            <h2>GROUP INVITE LINK</h2>
                            <input type="text" value={groupLink} onChange={e => setGroupLink(e.target.value)} placeholder="https://chat.whatsapp.com/..."/>
                            <h2>APPEAL TEMPLATE</h2>
                            <select value={groupPrompt} onChange={e => setGroupPrompt(e.target.value as PromptKey)}><option value="1">Template 1 - Formal</option><option value="2">Template 2 - Community</option><option value="3">Template 3 - Detailed</option></select>
                        </div>
                    </div>
                    <div className="button-container">
                        <button onClick={() => handleSendRequest('Group')} disabled={isLoading}>
                            <i className="fas fa-users mr-2"></i>
                             {isLoading ? 'PREPARING...' : 'SEND GROUP UNBAN REQUEST'}
                            {isLoading && <div className="spinner" style={{display: 'inline-block'}}></div>}
                        </button>
                    </div>
                </div>

                <div id="permanent-tab" className={`tab-content ${activeTab === 'permanent' ? 'active' : ''}`}>
                    <div className="code-block" style={{ textAlign: 'center', padding: '2rem' }}>
                        <h2>ENTER BANNED NUMBER</h2>
                        <input type="text" value={permanentNumber} onChange={e => setPermanentNumber(e.target.value)} placeholder="eg: +15551234567" className="text-center" />
                         <p className="tip">This will send a legally-focused appeal to ALL known support emails for maximum visibility.</p>
                    </div>
                    <div className="button-container">
                        <button onClick={() => handleSendRequest('Permanent')} disabled={isLoading}>
                            <i className="fas fa-gavel mr-2"></i>
                            {isLoading ? 'PREPARING...' : 'SEND TO ALL SUPPORT EMAILS'}
                            {isLoading && <div className="spinner" style={{display: 'inline-block'}}></div>}
                        </button>
                    </div>
                </div>
            </div>
            <div id="success-notification"></div>
        </>
    );
};

export default UnbanTool;
