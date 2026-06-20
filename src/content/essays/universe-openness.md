---
title: Beings That Can Prove Their Own Openness
description: The universe could have been deterministic underneath, with the seeming openness of the future a mere illusion. Instead, it is provable from the inside—almost as if we were meant to find out.
date: 2026-06-19
draft: false
---
Suppose—as other essays suggest—you really were the Ground of Being, dreaming up this reality and all its inhabitants. What signals could you give yourself to help you remember your true condition?

One thing you could do is ensure that the future stayed *open*—that you (now in the form of a dream character) didn't live in a boring, clockwork universe where everything could in principle be predicted. You want them to live in an *open* one.

But that wouldn't be enough, would it? Because how could they ever know for sure that it really was open? That this wasn't just wishful thinking?

If you were outrageously clever, perhaps you could produce a set of laws that not only allowed for randomness, but let them prove that this randomness was genuine.

But what on Earth could such a set of laws even look like?

Enter quantum mechanics and J. S. Bell.

---
## The History: Einstein, Podolsky, and Rosen

In 1935, Einstein and two colleagues published the [now-famous EPR paper](https://cds.cern.ch/record/405662/files/PhysRev.47.777.pdf) arguing that QM was incomplete. Their reasoning: entangled particles produce tightly correlated measurements, even far apart. The only way that works without faster-than-light signaling is if each particle carries some instruction from birth—but QM describes no such instruction. So something must be missing.

For decades, nobody saw how to settle this experimentally. Either the particles had preset values we hadn't discovered, or measurement itself somehow brought those values into being—and any single measurement looked the same under both stories. Then in 1964, John Bell found a crack. He showed that if Einstein was right, the correlations between particles had to obey certain rules. QM predicted they wouldn't.

I'll give a simplified account that still demands careful attention and reasoning. I think it's well worth the effort.

---
## The simplified version

Imagine you have a large collection of items, each defined by three binary properties A, B, and C. Each property can be either 0 or 1, giving eight possible combinations (2<sup>3</sup>).

Now suppose you count the total number of items where A=0 and B=0, regardless of the value of C. Let’s denote this quantity as `N(0, 0, x)`, where x means “don’t care.” A simple inequality that can be proven is:

`N(0, 0, x) ≤ N(x, 0, 0) + N(0, x, 1)`

In words: the number of particles where properties A and B are both zero is less than or equal to the number where B and C are zero _plus_ the number where A is 0 and C is 1. This follows from two basic observations:

- `N(0, 0, 0) ≤ N(x, 0, 0)`
- `N(0, 0, 1) ≤ N(0, x, 1)`

Adding these two gives us the original inequality.

Now imagine you draw particles one at a time and measure all three properties on each, tallying whether they fall into each of the three "buckets" (terms) in our inequality. Some will fall into none, some will fall in one, and some will fall in two. But at all times, the inequality will hold—because any time an item falls in the left bucket, it must _also_ fall in one of the two right buckets.

But suppose now instead of measuring all three properties for each item, we only measure *two* at random. (We will use this condition for the rest of the piece.) What happens? Depending on which two properties we chose, we can only increment at most **one** bucket. For example, if we chose A and B, we only have enough information to increment the first bucket. Therefore, the inequality will **not** necessarily hold at every step. 

Yet if we repeat this process enough times, it ought to hold in the long run. Why? Because then we're effectively just estimating the **true** tallies for each of the buckets amongst our population, which as a whole must obey the inequality. Any accidental bias should get "washed out" in the long run.

Is there a way to "defeat" our test—to make the inequality fail in the long run?

Well, one way that could happen is if our sampling is **biased** in a way that correlates with our choices of measurement. Suppose a demon is handing us samples. If it knows that we're going to measure A and B, it picks items where A=0 and B=0, thus growing the left count. If it knows we will measure B and C or A and C, it ensures that we get samples that do _not_ increment the buckets on the right. Then the left count grows while the right never does.

Are there any "weaker" ways to defeat the inequality? What if, after we measure the first chosen property, the demon is free to swap our particle out with one that agrees on that measurement, but may have different values for the other two? (Or equivalently: the particle's other two values are allowed to *change* after the first measurement.)

Well, if the demon is not allowed to make his choices depend on the value of the first measurement—if they are **random**—this wouldn't defeat it: it would be just as if we had drawn a different item to begin with.

On the other hand, if we let the change **depend** on the result of the first measurement, he **can** break it. For example, if we measure A=0, the demon can replace it with B=0, C=0. Then, if we measure B, the first bucket **does** increment, and if we measure C, the third does **not** increment. Either way, the left side increasingly overtakes the right.

What does this tell us? It tells us that _if_ these particles have well-defined values for the three properties in advance of being measured—even if they are allowed to "squirm around" during the process—then they cannot escape this inequality, _unless_ that "squirming" depends on either what _will be measured_ or what _has already been measured_.

There's no way for the particles to use **predetermined rules** to defeat the inequality.

---
## The quantum version

Now let's add another wrinkle.

Instead of drawing a single particle, let's say we're somehow able to draw a pair of initially **identical** particles. We send one off to the left, and the other off to the right—both at great distances. We then locally choose, for each particle, which single property we will measure. Those choices are made **randomly** and **simultaneously** (i.e., with not enough time for a signal to propagate from one side to the other).

In practice, the A/B/C properties are usually the spins (or polarizations) of the particles along three axes. In QM, these are called "_non-commuting observables_." That's crucial for the setup, but we won't dive into the math here.

The demon may still try and foil us, but now he has a major problem: how can he do anything conditional if there's not enough time to send information from one side to the other?

If he still manages to defeat the inequality, it can only mean one of two things[^superdeterminism]:

- He *does* have the ability to affect things faster than light (violating the fundamental physics principle of *locality*).
- The particles do not have predetermined properties at all. The values only come into being when measured, in a way that's correlated across both particles. This violates _realism_—our everyday understanding that things have definite properties.

[^superdeterminism]: A small minority of physicists—including Nobel laureate Gerard 't Hooft—hold out for a third option, called "superdeterminism": the universe's initial conditions determine every measurement choice anyone will ever make, in exactly the way needed to mimic quantum mechanics to arbitrary precision. Why? Just because. The trouble isn't that it's improbable or fails to explain anything. It actively *prevents* us from explaining anything, since experiments no longer give us information. Scott Aaronson develops this well [here](https://scottaaronson.blog/?p=6215).

that everything in the universe, including the particle pair creation, the "demon's" choices, and our own, are effectively predetermined. You can read some good arguments against that view [here](https://scottaaronson.blog/?p=6215), on the blog of acclaimed quantum computing expert Scott Aaronson. Search for "superdeterminism."

Einstein held that both were obviously true. Locality was guaranteed by relativity, and realism was just common sense. If QM could not preserve both, then obviously it was incomplete. He argued there must be a deeper theory at work: one in which the particles **do** have some definite (if unobservable) properties that account for our observations.

But the above inequality had not yet been discovered—let alone the astonishing fact that it is **violated** in reality, indicating that both requirements *cannot* simultaneously be upheld. Einstein's two assumptions—locality and realism—cannot both be true.

So which is violated? 

---

Most physicists today take the view that **realism** is what gives. The reasoning isn't a proof—it's a choice. If realism is abandoned, locality can survive. But if locality is abandoned, you have to add hidden faster-than-light machinery underneath—machinery we can never observe. Faced with that choice, most prefer the former.

So how can locality survive? Reading that second bullet again, it sounds like the particles are still somehow coordinating—and that coordination would seem to require faster-than-light signaling. The answer is subtle, and it took the field **decades** to pin down.

Here's the intuition: the particles were initially near each other, where they could "exchange information." When they got far apart, it is indeed *as if* one "knew" what was happening to the other—which is still "spooky"—but we can now prove that whatever was "exchanged" does not constitute **information**. 

In particular, the statistics on the left side are independent of those on the right. When each side looks at their local tallies, they will know nothing about what happened on the other side (what was chosen to be measured, let alone what the outcome was). This is harder to prove, which is why it took so long for the field to appreciate it.

The inequality wasn't even discovered until 1964, when J. S. Bell published his famous paper (as a "side project"). Even then, the precise sense in which two particles could seemingly "communicate" without violating locality hadn't been established as a theorem.

The experiment itself was first conducted by Clauser and Freedman in 1972, then refined by Aspect in the early 1980s and by Zeilinger and others in the decades following (work for which Aspect, Clauser, and Zeilinger jointly received the 2022 Nobel Prize). And only in the late '70s / early '80s had the field developed enough sophistication to clarify that distinction.

For decades after, physicists tried to find ways out—either by tightening the assumptions, finding experimental loopholes, or constructing realist theories that paid the price elsewhere (Bohmian mechanics, for instance, keeps definite particle positions but builds in explicit nonlocality). Each escape route has been progressively narrowed: Kochen-Specker (1967) ruled out non-contextual hidden variables; GHZ (1989) sharpened the violation from statistical to deterministic; and loophole-free Bell tests in 2015 closed the last experimental wiggle room.

And *why* do we keep searching for loopholes? Apart from being good scientists, perhaps this conclusion is hinting in a direction we're reluctant to go.

---

It may sound like this only shows why the particles themselves cannot be carrying hidden state that would let us predict their outcomes. But note that it actually does something much stronger.

If there were any state, _anywhere_, that could account for their outcomes, it would face the same problem: it would have to communicate that information across any distance, faster than light.

This means that, as best we can tell, there is no information _anywhere_ that would let us predict the outcomes. They are not just unpredictable in practice—they are unpredictable in principle. And we can **prove** it.

There is no a priori reason the universe had to be the kind of place where this proof works. It might have been deterministic underneath, or random in a way we couldn't pin down. Instead, it is built so that indeterminism is not just real but _demonstrable from the inside_.

Taken alone, this doesn't prove anything about design or purpose. But the universe **is** built in a way that makes one of the most indispensable features of conscious life—the *openness of the future*—into something we can trust.

Whether that's a coincidence or indicative of something far more fantastic is for you to decide. But as the other essays accumulate, a picture begins to emerge...