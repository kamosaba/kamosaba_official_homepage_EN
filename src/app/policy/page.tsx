import Link from "next/link";

export default function PolicyPage() {
    return (
        <div className="animate-fade-in" style={{ paddingTop: '160px', minHeight: '100vh', paddingBottom: '100px' }}>
            <div className="container">
                <h1 style={{ fontSize: '3rem', marginBottom: '40px' }} className="gradient-text">Privacy Policy</h1>

                <p style={{ marginBottom: '32px', opacity: 0.8 }}>
                    This service (Minecraft server and Discord server, hereinafter referred to as the "Service") respects the privacy of users and considers the protection of personal information to be an important responsibility. This privacy policy defines the acquisition, use, and management of information in the Service.
                </p>

                <div className="glass" style={{ padding: '40px', borderRadius: '24px' }}>
                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>Article 1: Information Collected</h2>
                        <p>In the Service, the following information may be acquired for operation and safe service provision.</p>

                        <div style={{ marginTop: '20px' }}>
                            <p style={{ fontWeight: 700, marginBottom: '8px' }}>1. Information Regarding Minecraft</p>
                            <ul style={{ paddingLeft: '20px', fontSize: '0.95rem', opacity: 0.8, lineHeight: 1.8 }}>
                                <li>Player names (may include UUIDs)</li>
                                <li>In-game chat logs</li>
                                <li>Login/logout history</li>
                                <li>Action history within the server (for anti-griefing and bug response)</li>
                            </ul>
                        </div>

                        <div style={{ marginTop: '16px' }}>
                            <p style={{ fontWeight: 700, marginBottom: '8px' }}>2. Information Regarding Discord</p>
                            <ul style={{ paddingLeft: '20px', fontSize: '0.95rem', opacity: 0.8, lineHeight: 1.8 }}>
                                <li>Discord username and user ID</li>
                                <li>Messages, reactions, and VC usage within the server</li>
                                <li>Role information and channel usage history</li>
                            </ul>
                        </div>

                        <div style={{ marginTop: '16px' }}>
                            <p style={{ fontWeight: 700, marginBottom: '8px' }}>3. Information Provided During Inquiries/Suggestions</p>
                            <ul style={{ paddingLeft: '20px', fontSize: '0.95rem', opacity: 0.8, lineHeight: 1.8 }}>
                                <li>Content voluntarily sent by the user (text, images, etc.)</li>
                            </ul>
                        </div>

                        <p style={{ marginTop: '24px', fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 700 }}>* The Service does not request real-world personal information such as name, address, or phone number.</p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>Article 2: Purpose of Use</h2>
                        <p>The acquired information will be used only within the scope of the following purposes.</p>
                        <ol style={{ paddingLeft: '24px', marginTop: '16px', lineHeight: 2 }}>
                            <li>Operation, management, and maintenance of the server</li>
                            <li>Response to rule violations, griefing, and fraudulent acts</li>
                            <li>Fact-finding and response when trouble occurs</li>
                            <li>Investigation and fixing of bugs</li>
                            <li>Use as reference information for service improvement</li>
                        </ol>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>Article 3: Provision of Information to Third Parties</h2>
                        <p>The management will not disclose or provide the acquired information to third parties except in the following cases:</p>
                        <ol style={{ paddingLeft: '24px', marginTop: '16px', lineHeight: 2 }}>
                            <li>When disclosure is required based on laws and regulations</li>
                            <li>When there is consent from the user themselves</li>
                            <li>When the management determines it is necessary to ensure the safety of the server</li>
                        </ol>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>Article 4: Management of Information</h2>
                        <ol style={{ paddingLeft: '24px', marginTop: '16px', lineHeight: 2 }}>
                            <li>We implement appropriate management to prevent unauthorized access, tampering, or leakage.</li>
                            <li>Information is retained only for the necessary period and will be appropriately deleted when no longer needed.</li>
                            <li>No one other than management members will access information without a management purpose.</li>
                        </ol>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>Article 5: Logs and Records</h2>
                        <p>In the Service, logs may be recorded for the following purposes.</p>
                        <ul style={{ paddingLeft: '20px', marginTop: '16px', lineHeight: 2 }}>
                            <li>Preservation of evidence in case of rule violations or trouble</li>
                            <li>Investigation of bugs or data anomalies</li>
                            <li>Checking server load and stability</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>Article 6: Usage by Minors</h2>
                        <p>The Service assumes usage by minors, but we do not recommend posting personally identifiable information or sharing external contact information.</p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>Article 7: Changes to the Privacy Policy</h2>
                        <p>This privacy policy may change its content as necessary. By using the Service after a change, you are deemed to have agreed to the latest policy.</p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>Article 8: Inquiries</h2>
                        <p>For questions regarding this policy or inquiries about personal information, please contact us via the "Inquiry" channel in the Discord server.</p>
                    </section>
                </div>

                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <Link href="/" style={{ opacity: 0.6 }}>← Back to Home</Link>
                </div>
            </div>
        </div>
    );
}
