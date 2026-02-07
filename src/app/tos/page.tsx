import Link from "next/link";

export default function TosPage() {
    return (
        <div className="animate-fade-in" style={{ paddingTop: '160px', minHeight: '100vh', paddingBottom: '100px' }}>
            <div className="container">
                <h1 style={{ fontSize: '2.5rem', marginBottom: '40px' }} className="gradient-text">Terms of Service<br /><span style={{ fontSize: '1.2rem', opacity: 0.8 }}>(Minecraft Server & Discord Server)</span></h1>

                <p style={{ marginBottom: '32px', opacity: 0.8 }}>
                    All users using this server (hereinafter referred to as the "Service") are deemed to have agreed to these terms.<br />
                    To ensure smooth and comfortable community operations, please be sure to check the following content.
                </p>

                <div className="glass" style={{ padding: '40px', borderRadius: '24px' }}>
                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>Article 1: Prohibited Actions (Minecraft Server)</h2>
                        <p>The following actions are prohibited. If a violation is confirmed, measures such as warnings, punishments, or bans may be taken.</p>
                        <ol style={{ paddingLeft: '24px', marginTop: '16px', lineHeight: 2 }}>
                            <li>Intentional attacks and PvP actions</li>
                            <li>Destroying other people's buildings or houses</li>
                            <li>Taking other people's property or items without permission</li>
                            <li>Harassment or nuisance behavior towards others</li>
                            <li>Intentionally ignoring questions or calls in chat, including actions</li>
                            <li>Monopolizing resources from communal storage more than necessary</li>
                        </ol>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>Article 2: Actions that May Lead to a Ban</h2>
                        <p>Performing the prohibited actions defined in the previous article may result in a <strong>ban at the discretion of the management</strong>.<br />Decisions on measures will be made considering the content, frequency, and maliciousness.</p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>Article 3: Rules Regarding Items and Progression</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div>
                                <p style={{ fontWeight: 700 }}>1. Equipment that may be distributed to new participants is limited to iron equipment</p>
                                <ul style={{ paddingLeft: '20px', fontSize: '0.9rem', opacity: 0.8 }}>
                                    <li>To respect those who want to collect items themselves, excessive distribution is prohibited.</li>
                                </ul>
                            </div>
                            <div>
                                <p style={{ fontWeight: 700 }}>2. Elytra should be obtained by the following methods:</p>
                                <ul style={{ paddingLeft: '20px', fontSize: '0.9rem', opacity: 0.8 }}>
                                    <li>Explore and obtain it yourself.</li>
                                    <li>Explore with someone and obtain naturally generated ones.</li>
                                </ul>
                            </div>
                            <p style={{ fontWeight: 700 }}>3. One person can hold a maximum of 2 Elytra at the same time.</p>
                            <p style={{ fontWeight: 700 }}>4. The Ender Dragon will not be respawned for the time being.</p>
                            <p style={{ fontWeight: 700 }}>5. Please do not create excessively large personal houses or facilities.</p>
                        </div>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>Article 4: Handling Item Duplication and Data Issues</h2>
                        <ul style={{ paddingLeft: '20px', lineHeight: 2 }}>
                            <li>Issues where items revert upon re-login may occur.</li>
                            <li>Please be sure to store important items in chests etc. before logging out.</li>
                            <li>Please discard any items that were unintentionally duplicated yourself.</li>
                        </ul>
                        <p style={{ marginTop: '16px', fontSize: '0.9rem', opacity: 0.8 }}>We thank everyone who has cooperated regarding this matter.</p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>Article 5: Management Policy</h2>
                        <p>Both people who want to progress slowly and those who want to complete the game quickly and enjoy building or redstone contraptions exist on this server. Therefore, we adopt the following policy.</p>
                        <ol style={{ paddingLeft: '24px', marginTop: '16px', lineHeight: 2 }}>
                            <li>We will not set specific opening dates for the Nether or the End.</li>
                            <li>For those who want to progress slowly, we have prepared a teleport destination for a base about 4500 blocks away from the lobby.</li>
                            <li>We generally recommend sharing resources other than rare items and equipment.</li>
                            <li>We assume the use of communal storage in the early stages.</li>
                            <li>Cooperation is encouraged for tasks that are difficult individually, such as large-scale constructions or circuits above the Nether ceiling.</li>
                        </ol>
                        <p style={{ marginTop: '20px', fontWeight: 800 }}>Please prioritize having fun at your own pace without being overly bound by these terms.</p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>Article 6: Discord Server Usage Rules</h2>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>1. Basic Rules</h3>
                        <ol style={{ paddingLeft: '24px', marginBottom: '24px', lineHeight: 2 }}>
                            <li>Actions that are crimes in the real world are also prohibited on this server.</li>
                            <li>Finding friends and server promotion are permitted (*dating purposes are prohibited).</li>
                            <li>If trouble or problems occur, please use the "Inquiry" (Support) channel.</li>
                            <li>Improvement points and requests are collected in the "Suggestions" channel.</li>
                            <li>Recruitment or promotion is limited to one sentence per server or gathering.</li>
                        </ol>

                        <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>2. VC (Voice Chat) Rules</h3>
                        <ul style={{ paddingLeft: '20px', lineHeight: 2 }}>
                            <li>Please refrain from excessive use of informal language.</li>
                            <li>Commanding tones such as "Do this!" are prohibited.</li>
                            <li>Please do not repeatedly enter and leave VC channels without purpose.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>Article 7: Changes to the Terms</h2>
                        <p>These terms may be changed without notice at the discretion of the management. By using the Service after a change, you are deemed to have agreed to the latest terms.</p>
                    </section>
                </div>

                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <Link href="/" style={{ opacity: 0.6 }}>← Back to Home</Link>
                </div>
            </div>
        </div>
    );
}
