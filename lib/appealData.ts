// lib/appealData.ts

export const accountAppeals = {
    normal: {
        '1': `Dear WhatsApp Support Team,

I am writing to respectfully request a review of the ban placed on my WhatsApp account associated with the number NUMBER_HERE. I believe this action may have been taken in error as I have always adhered to WhatsApp's Terms of Service and Community Guidelines. 

My account is crucial for both personal communication and professional activities. The sudden restriction has caused significant disruption.

I assure you that I have not engaged in any prohibited activities. I kindly request you to investigate this matter and consider reinstating my account. Your assistance would be greatly appreciated.

Thank you for your time and consideration.

Sincerely,
A Valued WhatsApp User`,
        '2': `To WhatsApp Support,

I am reaching out regarding my banned account (NUMBER_HERE). As a long-term user, I have always respected platform rules. The ban has created substantial difficulties as this is my primary communication channel.

I have never used automated messaging systems or engaged in bulk messaging. I would be grateful if you could reexamine this decision and restore my account access.

Please let me know if any further verification is needed.

Respectfully,
A Dedicated User`,
        '3': `Dear WhatsApp Team,

I am writing to appeal the ban on my account (NUMBER_HERE). This restriction has come as a complete surprise as I have always been a conscientious user.

WhatsApp serves as my primary means of communication with international family members. I confirm that I have not violated any terms of service and kindly request you to review this case and restore my account access.

Thank you for your understanding.

Best regards,
A Responsible User`
    },
    permanent: {
        '1': `Dear WhatsApp Support,

I am writing to appeal the permanent ban on my account (NUMBER_HERE) and request reconsideration. I understand that violations may have occurred, but I assure you they were unintentional.

This account is vital to my daily life, containing years of important communications. Upon reflection, certain behaviors might have been misinterpreted. I sincerely apologize for any unintended policy breaches and assure you of my commitment to compliance moving forward.

I respectfully request a final opportunity to continue using WhatsApp.

Sincerely,
A User Seeking Redemption`,
        '2': `To the WhatsApp Review Team,

I am submitting this appeal regarding the permanent ban on my account (NUMBER_HERE). I believe the penalty in my case is disproportionate. This account contains irreplaceable communications and its loss is a significant hardship.

I suspect the ban may have resulted from being added to groups that violated terms without my active participation. I accept responsibility and have educated myself on all community guidelines.

Please consider reinstating my account with a final warning.

Respectfully,
A User Seeking Resolution`,
        '3': `Dear WhatsApp Support,

I am appealing the permanent ban on my account (NUMBER_HERE). This account is essential for maintaining contact with elderly relatives who can only communicate through WhatsApp. The ban has isolated them.

The violations, if any, likely stemmed from coordinating a community fundraiser which may have exceeded forwarding limits. I have thoroughly reviewed the Terms of Service and would be grateful for the chance to prove myself as a responsible user.

Please consider my appeal and the extenuating circumstances.

Sincerely,
A User in Need of Restoration`
    }
};

export const groupAppeals = {
    '1': `Dear WhatsApp Support,

I am writing to formally request the reinstatement of our WhatsApp group, invite link: GROUP_LINK_HERE. Our group consistently adhered to WhatsApp's Community Guidelines. We maintained active moderation and believe the ban was an error.

The group served [number] members who relied on it for [explain purpose]. Its removal has disrupted important communications. We kindly request you investigate this matter and restore our group.

Sincerely,
The Group Administrators`,
    '2': `To WhatsApp Support Team,

We are appealing the ban on our WhatsApp group (GROUP_LINK_HERE). This group has been a vital platform for [explain purpose]. Our moderation team worked diligently to maintain a safe environment.

The sudden ban has caused significant disruption to [explain impact]. We suspect this action may have been triggered by false reporting or an automated error. Please restore our group and provide any feedback to help us maintain compliance.

Respectfully,
The Group Leadership Team`,
    '3': `Dear WhatsApp Trust and Safety Team,

We are submitting a formal appeal for our group (GROUP_LINK_HERE). This group served as the primary communication channel for [explain community] with [number] members.

Our group maintained strict adherence to policies through active moderation. The ban has severely impacted our ability to [explain critical functions]. We respectfully request group restoration.

Sincerely,
The Group Administration Committee`
};

export const emailMap: { [key: string]: { [key: string]: string } } = {
    'regular': { 'android': 'support@support.whatsapp.com', 'iphone': 'iphone-support@support.whatsapp.com' },
    'business': { 'android': 'smb_web@support.whatsapp.com', 'iphone': 'smb_web@support.whatsapp.com' },
    'accessibility': { 'android': 'Accessibility@support.whatsapp.com', 'iphone': 'Accessibility@support.whatsapp.com' }
};

export const groupAppealHelpers = {
    getGroupPurpose: (type: string) => ({'personal': 'family communications', 'business': 'professional collaboration', 'community': 'community event planning'}[type] || 'community interactions'),
    getGroupSizeNumber: (size: string) => ({'small': 'under 50', 'medium': 'over 50', 'large': 'over 200'}[size] || 'many'),
};