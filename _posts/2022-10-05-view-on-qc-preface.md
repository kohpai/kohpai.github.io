---
layout: post
title: A View on Quantum Computing
subtitle: From a perspective of computer engineering
date: 2022-10-05
categories: quantum computing
---

{: style="text-align: justify" }

Not long ago, I had started programing quantum algorithms for the first time using different SDKs such as Qiskit from
IBM and QDK (Q#) from Microsoft.
Combined with an interesting discussion with a friend of mine on social media, I thought I could write and elaborate my
understandings in quantum computing in this post.
Unfortunately, it seems what is on my mind can't fit into just a single post, so I will stretch it out into a series
of posts instead, this being just the preface of it all.

{: style="text-align: justify" }

It's worth noting that my first intention was to write all of this in Thai since it is my mother tongue, and I would
like my Thai fellows to read and understand it more than anyone;
but after one full post published online, I find that it is extremely difficult to make this subject understandable in
Thai &mdash; it ended up with so many foreign words that it obscure the narration, and I can't really stand that.
So, that published post became a draft, and now I'm writing it again in English instead.

## Preface

{: style="text-align: justify" }

For the past six months or so, I have spent some of my time writing quantum programs targeting quantum computing
simulators running on my laptop;
it was both for my own interest and for a thesis I was working on.
One day while I was coding, I thought back to a discussion I had had with a friend of mine on social media, he was a
professor who used to teach me in college.
He said something along the line of "I am waiting for the day when programming for quantum computers is at the same
level as programming for classical computers."
By the same level, he meant the abstraction level presented during both algorithm design and programming.
When you're programming for classical computers, you rarely care about what operators to apply to bits stored in
registers, how many bits are required to implement a data structure, or should you move the data out of a register to
the memory;
instead, you look at algorithms more abstractly, you see data in various types (`string`, `int`, `float`, etc.), you use
loops and conditions to design and implement algorithms.
That is not the case when it comes to quantum programming.
You can easily find most, if not all, of the famous quantum algorithms out there are designed at the level of qubits,
which is equivalent to classical bits in our laptops today.

{: style="text-align: justify" }

After some time of considering if what he said is plausible, and more time on programming, I have stumbled upon some 
interesting questions which finally led me to the answer.
These questions are, for example, "Can we compute classical computations, e.g. addition and multiplication, on quantum
computers?", "Why do we have to involve every relevant qubits in a computation when in classical computer, you can do
it one chunk after another, 32/64 bits at a time?", "Why do we still have to program on the qubit-level and not higher?",
and "If we could program quantum computers with the same abstraction level as in classical programming, what would the
compiled code &mdash; *quantum assembly code* &mdash; look like?"

{: style="text-align: justify" }

In this series, I will walk you through the basic of quantum computations, but it will be just enough so that we can
answer the above questions.
We definitely won't go into the details of famous, advanced quantum algorithms such as Simon's, Grover's, and Shor's
algorithm, although I will show some advantages of quantum algorithms when it comes to query complexity using the
simplest example I can think of.

{: style="text-align: justify" }

And finally, as you can see from the questions I listed above, this series probably suits those who have knowledge in
computer engineering, or related fields, to some degree.
The content will involve, for example, digital systems, computer architecture, theory of computation, etc.
That being said, I will try to explain elementary concepts as best and short as I can.

## Overview

- Preface: A View on Quantum Computing
- Chapter 1: Bits and Qubits
- Chapter 2: Behind the Scenes of Computations
- Chapter 3: Quantum Advantage
- Chapter 4: Limitations of NISQ Computer
- Chapter 5: Conclusion and Beyond NISQ

[//]: # (1. superposition & entanglement & measurement & discrete and continuous )
[//]: # (2. universal gate set & classical computations & involvement of all qubits)
[//]: # (3. balanced vs constant)
[//]: # (4. coherence time & # of qubits & programming abstraction & assembly code)
[//]: # (5. the way it is & quantum OOP)

{: style="text-align: justify" }

In the first chapter, we define bits (classical bits) and qubits (quantum bits), and talk about the similarities and
differences between them.
Then, with those differences in mind, we show how they affect the computations in quantum computers in Chapter 2.
Before it's getting too boring, in Chapter 3, we demonstrate a quantum advantage when it comes to query complexity using
a small simple example.
In Chapter 4, we introduce the term *Noisy Intermediate-Scale Quantum (NISQ) era* which is used to describe the current
age of quantum technologies that are not perfect (noiseless and scalable) yet.
We also discuss the limitations of quantum computers in this chapter.
Finally, we give our conclusion about the whole series and what are our thoughts on the future of quantum computing
beyond NISQ era.

## Note

{: style="text-align: justify" }

If you somehow end up finding this post, please keep in mind that this is a series which is being written as we speak,
the content is subject to a lot of changes.
There may be more or less chapters than what I intended initially.
I'll update the content as I see fit.