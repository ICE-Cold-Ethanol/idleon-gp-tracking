import { getLayout } from '../components/layouts/MainLayout'

const Instruction = () => {
    return (
        <article className="prose prose-xl flex flex-col">
            <blockquote>
                Please do not share screenshot of your devtools to others if you
                are not totally sure about it. It might contain sensitive
                personal data.
            </blockquote>
            <h2>1. Open Chrome DevTools</h2>
            <p>
                The first thing you want to do is to open chrome devtools. It
                provide much useful information about the opened website, we
                would use it to extract the data from the game.
            </p>
            <p>
                <strong>Press F12</strong> to open the devtools, a new window
                will pop out in chrome. It should come up at the bottom in
                default, but it can be on other side according to your personal
                setting.
            </p>
            <figure>
                <img src="/step/chrome/1.png" alt="with devtools open" />
                <figcaption>
                    With devtools open, your screen should look similar to this
                </figcaption>
            </figure>
            <h3>Optional: Open in separate window</h3>
            <p>
                I would suggest you to open the devtools in a separate window so
                you can work with it a bit easier. To do this, find the{' '}
                <strong>triple dot icon</strong> on the{' '}
                <strong>top right corner</strong> of the devtools, and select
                dock to separate window in the menu.
            </p>
            <figure>
                <img src="/step/chrome/2.png" alt="devtools setting menu" />
                <figcaption>
                    The menu button and the dock setting button you are looking
                    for
                </figcaption>
            </figure>
            <p>
                You would see the devtools separate from your browser window,
                which you can freely resize it. Now <strong>refresh</strong> the
                game with devtools open, so we can capture the guild data.
            </p>

            <hr></hr>

            <h2>2. Locate Data</h2>
            <p>
                Then <strong>go in game and open the guild tab</strong>. I
                believe you are smart enough to figure out how to do it ;)
            </p>
            <p>
                Back to devtools, you want to{' '}
                <strong>open the network tab</strong>. Here you will find the
                records of all your network activities.
            </p>
            <figure>
                <img src="/step/chrome/3.png" alt="network tab" />
                <figcaption>
                    You can switch to network tab by clicking this button
                </figcaption>
            </figure>
            <p>
                We need to filter out the one we actually need. Click the{' '}
                <strong>WS</strong> filter button in the devtools, and there
                should be only one item left. And then click on that item{' '}
                <strong>Name</strong> to view the detail of it.
            </p>
            <figure>
                <img src="/step/chrome/4.png" alt="network tab after filter" />
                <figcaption>
                    You want to select the WS filter first, and click the name
                    of the item. You should see something like this.
                </figcaption>
            </figure>
            <p>
                Still too much information here, we need to do some filter
                again. This time,{' '}
                <strong>set the type filter from All to Receive</strong>, and
                enter <code>_guild/.*/m</code> (exclude the backtick) into the
                search bar.
            </p>
            <p>
                There should be few items left, you want to{' '}
                <strong>find the one with the longer length</strong> (shown at
                the second column), you may want to check it&apos;s content,
                which should look similar to the one in the picture.
            </p>
            <figure>
                <img src="/step/chrome/5.png" alt="filter setting" />
                <figcaption>
                    Here is what your filter setting should look like, and the
                    item structure you are looking for.
                </figcaption>
            </figure>
            <p>
                Once you find the correct item, right click on it and select
                copy message.
            </p>
            <figure>
                <img src="/step/chrome/6.png" alt="copy message menu" />
                <figcaption>Copy message</figcaption>
            </figure>
            <hr></hr>
            <h2>3. Data to Google Sheet</h2>
            <h3>Convert Data</h3>
            <p>
                Google Sheet is a free solution that can help use manage the
                guild gp data. I have made a template for you to use, you can
                get it from the header bar of this site. You should{' '}
                <strong>make a copy to your own google drive</strong>.
            </p>
            <p>
                But the raw data we copy from the devtools is not suitable to
                use in Google Sheet, so i created a simple to to covert it for
                you. Go to the convert section of this site,{' '}
                <strong>paste the raw data into the big text box</strong>. Then
                you want to click the <strong>Get Data Entries</strong> button
                first, if there is no error the converted data should be copied
                to you clipboard now.
            </p>
            <h3>Enter GP Record Data</h3>
            <p>
                Head on to the Google Sheet and find the <em>DATA ENTRY</em>{' '}
                sheet. Paste the data in the top left empty cell under the
                header. In the paste option you want to choose{' '}
                <em>Split text to columns</em>
            </p>
            <figure>
                <img src="/step/chrome/7.png" alt="paste option" />
                <figcaption>
                    Choose this option then your text would split to different
                    columns.
                </figcaption>
            </figure>
            <p>
                Repeat this process for future data entries. But do not
                overwrite current records, paste them to the empty row following
                the existing rows.
            </p>
            <h3>Name Table</h3>
            <p>
                We record the players using their player id, but we would want
                to know their player name too. Back to the convert page and
                click <strong>Get Name Table</strong>, and repeat the step but
                this time paste to <em>NAME TABLE</em> sheet.{' '}
                <strong>
                    You only need to do it once, or when you need to update the
                    name in case someone change their display name.
                </strong>
            </p>
            <figure>
                <img src="/step/chrome/8.png" alt="paste option" />
                <figcaption>Your name table should look like this.</figcaption>
            </figure>
            <p>
                You will see the player name generated in the orange column of
                the <em>DATA ENTRY</em> sheet.
            </p>
            <h3>View Statistics</h3>
            <p>
                To have a nice table view of the gp records, go to the{' '}
                <em>VIEW</em> sheet.
            </p>
            <figure>
                <img src="/step/chrome/9.png" alt="paste option" />
                <figcaption>Nice table view of the records.</figcaption>
            </figure>
            <h3>Hightlight Unmet Requirements</h3>
            <p>
                There is one final function that can help you to find out the
                player that did not match the GP requirement. In the{' '}
                <em>DATA ENTRY</em> sheet there is a green box that allow you to
                set the target amount of GP required between each record
                interval.
            </p>
            <figure>
                <img src="/step/chrome/10.png" alt="Target option" />
                <figcaption>The GP requirement.</figcaption>
            </figure>
            <p>
                For example if I get 10 GP for today, and the requirement is 20
                GP per day. When next day record is added, my record would be
                marked in red color in the <em>VIEW</em> sheet.
            </p>
            <figure>
                <img src="/step/chrome/11.png" alt="Failed requirement" />
                <figcaption>
                    Record did not reach the requirement and marked in red
                    color.
                </figcaption>
            </figure>
            <p>
                Thats all i want to tell you. Thanks for wasting your time
                reading my horrible English and i hope my tool is useful for
                you.
            </p>
        </article>
    )
}

const Index = () => {
    return (
        <div className="flex flex-col items-center flex-grow p-8">
            <Instruction></Instruction>
        </div>
    )
}

Index.getLayout = getLayout

export default Index
