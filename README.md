# media-tracker
An application to keep track of the media I consume.

## Architecture

### Overview

media-tracker consists of two components: a back-end API written in JavaScript using Node and Express and a front end built using React.
The back-end sources data from a single file `'media.json'` that lives in `/data/`.

### Data File Structure

Each media item (a book, game, movie, etc.) has its own entry in `media.json`. The schema for a media is defined as follows:

```
<id> : {
    "id": <string>,
    "name": <string>,
    "completed": <boolean>,
    "achievements": {[
        <achievementId> {
            "description": <string>,
            "date": &lt;int>
        },
        ...
        },
        <achievementId>: {
            "description": <string>
        }
    ]}
}
```

Achievements are self-defined milestones of importance. The only required attribute is `description`, everything else is up to the user to determine. For example, watching a movie for the first time may prompt an achievement that looks like this:

```
{
...
    "achievements": {[
        0: {
            "description": "Finished watching for the first time",
            "date": 809247600000
        }
    ]}
}
```

The integer stored in date is the number of Milliseconds since the Unix Epoch, which can be calculated using `getTime()` on a `Date` object. See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime#Examples) for more.
