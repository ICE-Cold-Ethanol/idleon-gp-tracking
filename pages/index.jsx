import { getLayout } from '../components/layouts/MainLayout'
import Link from 'next/link'

const Instruction = () => {
    return (
        <article className="prose prose-xl flex flex-col">
            <h2>Updated on 5/5/2021</h2>
            <p>
                Inspired by u/Aizome awesome work: {''}
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.reddit.com/r/idleon/comments/n4s95c/legends_of_idleon_guild_exporter_export_your/?utm_source=share&utm_medium=web2x&context=3"
                >
                    Legends of Idleon Guild Exporter
                </a>
                . I have simplify the process down to one button click. Without
                Aizome great work I would never come up with such a bright idea.
                Go upvote his post and leave some kind word there.
            </p>
            <p>
                Also i have make a new version of Google Sheet, no longer need
                to manage the NAME TABLE manually. Sorry if you are using the
                old version method, it is not compatible so you need to redo the
                tracking using new method if you want to use it.
            </p>
            <hr></hr>
            <h2>1. Install Bookmarklet</h2>
            <p>
                Bookmarklet is a script that stored in browser bookmarks. It can
                perform certain action once executed.{' '}
                <strong>
                    WARNING: EXECUTE UNKNOWN CODE FROM INTERNET CAN BE
                    DANGEROUS. PLEASE BE AWARE OF THE RISK.
                </strong>
            </p>
            <p>
                If you are not comfortable with using bookmarklet, consider
                using the{' '}
                <Link href="/instruction-old">
                    <a>old version method</a>
                </Link>{' '}
                that is completely done by hand and not external codes are
                involved.
            </p>
            <p>
                To install the bookmarklet, please drag the following link into
                your bookmarks bar. (Press Ctrl + Shift + B if it is hidden)
            </p>
            <a
                onClick={(e) => {
                    e.preventDefault()
                }}
                href="javascript: (()=>{if('www.legendsofidleon.com'!==window.location.hostname)return void alert(`Stop browsing ${window.location.hostname}, go play Idleon!`);if(!bn||!xn)return void alert('Guild data not fount. Please make sure that\n1. You are in a guild.\n2. You opened the guild menu.');const o=(new Date).toISOString().substr(0,10),n=xn.map(n=>[o,n[7],n[0],n[4]].join(',')).join('\n');window.navigator.clipboard.writeText(n).then(()=>alert('Guild data has been copied to your clipboard.')).catch(()=>alert('Something go wrong...But it works on my machine.'))})();"
            >
                GP Data Extractor
            </a>
            <figure>
                <img
                    src="/step/chrome/new/1.png"
                    alt="drag into bookmark bar"
                />
                <figcaption>Drag the link into bookmark bar</figcaption>
            </figure>

            <p>
                Or you can create bookmarks manually and copy the following code
                into the URL section:
            </p>
            <pre>
                <code className="select-all">
                    {
                        "javascript: (()=>{if('www.legendsofidleon.com'!==window.location.hostname)return void alert(`Stop browsing ${window.location.hostname}, go play Idleon!`);if(!bn||!xn)return void alert('Guild data not fount. Please make sure that\n1. You are in a guild.\n2. You opened the guild menu.');const o=(new Date).toISOString().substr(0,10),n=xn.map(n=>[o,n[7],n[0],n[4]].join(',')).join('\n');window.navigator.clipboard.writeText(n).then(()=>alert('Guild data has been copied to your clipboard.')).catch(()=>alert('Something go wrong...But it works on my machine.'))})();"
                    }
                </code>
            </pre>

            <figure>
                <img src="/step/chrome/new/2.png" alt="copy code into url" />
                <figcaption>
                    Copy the code into the URL section of bookmark
                </figcaption>
            </figure>
            <p>
                Once the bookmarklet is saved in your bookmarks, you can use it
                by clicking on it.{' '}
                <strong>
                    You do not need to redo the set up unless there is update to
                    the bookmarklet.
                </strong>
            </p>

            <hr></hr>

            <h2>2. Extract Data</h2>
            <p>
                Then <strong>go in game and open the guild tab</strong>. I
                believe you are smart enough to figure out how to do it ;)
            </p>
            <p>
                <strong>
                    With the guild tab opened, click the bookmarklet to execute
                    it
                </strong>
                . A message would be shown if the process success. The data will
                be copied into your clipboard.
            </p>
            <figure>
                <img src="/step/chrome/new/3.png" alt="copy code into url" />
                <figcaption>Success message</figcaption>
            </figure>
            <hr></hr>
            <h2>3. Data to Google Sheet</h2>
            <h3>Enter Data</h3>
            <p>
                Open the Google Sheet V2 in the header bar and{' '}
                <strong>make a copy to your own Google Drive</strong> .
            </p>
            <p>
                Go to <em>DATA ENTRY</em> sheet. Paste the data in the top left
                empty cell under the header. In the paste option you want to
                choose <em>Split text to columns</em>.
            </p>
            <figure>
                <img src="/step/chrome/new/4.png" alt="paste option" />
                <figcaption>
                    Choose this option then your text would split to different
                    columns.
                </figcaption>
            </figure>
            <p>
                Repeat this process for future data entries. But do not
                overwrite current records, paste them to the leftmost cell of
                the empty row following the existing rows and split to columns.
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
                There is a function that can help you to find out the player
                that did not match the GP requirement. In the{' '}
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
