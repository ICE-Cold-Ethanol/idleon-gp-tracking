import { getLayout } from '../components/layouts/MainLayout'

const Instruction = () => {
    return (
        <article className="prose prose-xl max-w-[75%] flex flex-col">
            <h2>1. Open Chrome DevTools</h2>
            <p>
                The first thing you want to do is to open chrome devtools. It
                provide much useful information about the opened website, we
                would use it to extract the data from the game.
            </p>
            <p>
                Press F12 to open the devtools, you would see a new window pop
                out in chrome. It should come up at the bottom in default, but
                it can be on other side according to your personal setting.
            </p>
            <figure>
                <img src="/step/chrome/1.png" alt="with devtools open" />
                <figcaption>
                    With devtools open, your screen should look similar to this
                </figcaption>
            </figure>
            <h3>Open in separate window</h3>
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
                Then you want to <strong>go in game, open the guild tab</strong>{' '}
                which list out all the guild member and their GP, i believe you
                are smart enough to figure out how to do it ;)
            </p>
            <p>
                Now turn back to devtools, you want to open the network tab.
                Here you will find the records of all your network activities.
            </p>
            <figure>
                <img src="/step/chrome/3.png" alt="network tab" />
                <figcaption>
                    You can switch to network tab by clicking this button
                </figcaption>
            </figure>
            <p>
                There are too much items in here, we do not care most of them,
                so we need to filter out the one we actually need. Click the{' '}
                <strong>WS</strong> filter button in the devtools, and there
                should be only one item left. And then click on that item{' '}
                <strong>Name</strong> to view the detail of it.
            </p>
            <figure>
                <img src="/step/chrome/4.png" alt="network tab" />
                <figcaption>
                    You want to select the WS filter first, and click the name
                    of the item. You should see something like this.
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