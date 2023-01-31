---
layout: post
title: Quantum Computing กับอีกหนึ่งมุมมอง
subtitle: บทนำ
date: 2022-05-19
categories: quantum computing
---

[//]: # (หากนับเวลาจากโพสต์ล่าสุด ก็เป็นเวลากว่าสองปีแล้วที่ผมไม่ได้เขียนบล็อกต่อเลย)

[//]: # (ตอนนี้หลังจากได้เรียนรู้เกี่ยวกับ Quantum Computing มากขึ้นเลยอยากมาเขียนโพสต์เกี่ยวกับ Quantum Computing ซักหน่อย)

[//]: # ()
[//]: # (---)

[//]: # (\)
เมื่อไม่นานมานี้ผมได้มีโอกาสลองใช้งานไลบรารี่สำหรับเขียนโปรแกรมทางด้าน Quantum Computing หลาย ๆ ตัว เช่น Qiskit จาก IBM หรือ QDK (Q#) จาก Microsoft
เป็นต้น บวกกับการแลกเปลี่ยนความคิดเห็นกับอาจารย์ท่านหนึ่งทางโซเชียลมีเดียเกี่ยวกับการเขียนโปรแกรมในด้านนี้
ทำให้ผมตัดสินใจมาเขียนโพสต์เพื่อบอกเล่าเรื่องราวมุมมองความเข้าใจของผมในเรื่อง
Quantum Computing ดู แต่เนื่องจากสิ่งที่ผมต้องการเขียนนั้นไม่สามารถย่อลงให้อยู่ภายในโพสต์เดียวได้
โพสต์นี้จึงจะเป็นเพียงบทนำของซีรีย์ที่จะช่วยให้ผู้อ่านเข้าใจการทำงานของควอนตัมคอมพิวเตอร์มากขึ้นนั่นเอง

สิ่งหนึ่งที่ผมต้องบอกก่อนที่เราจะเริ่มบทนำอย่างจริงจังก็คือ
ในซีรีย์นี้ผมอยากจะเขียนเป็นภาษาไทยและหลีกเลี่ยงการใช้คำทับศัพท์ให้มากที่สุดเพื่อหลีกเลี่ยงความสับสนจากการเว้นวรรคคำในภาษาอังกฤษ
(การเว้นวรรคในภาษาอังกฤษและภาษาไทยนั้นสื่อถึงคนละความหมายกัน) ดังนั้นในทุกโพสต์ของซีรีย์นี้ ผมจะทำการเขียนคำทับศัพท์และคำแปลไว้ที่ท้ายโพสต์
เพื่อว่าหากผู้อ่านสับสนกับคำภาษาไทยก็สามารถเลื่อนลงไปดูคำดั่งเดิมในภาษาอังกฤษได้นั่นเองครับ

## บทนำ

ช่วงหลายเดือนที่ผ่านมา ผมใช้เวลาบางส่วนไปกับการเขียนโปรแกรมเพื่อนำไปรันในตัวจำลองควอนตัมคอมพิวเตอร์บนคอมพิวเตอร์ส่วนตัวของผม
ทั้งด้วยความสนใจส่วนตัวและเป็นงานส่วนหนึ่งที่ผมต้องทำเพื่อนำไปใส่ในวิทยานิพนธ์ด้วย ระหว่างที่เขียนโปรแกรมอยู่
ผมก็คิดถึงความเห็นของอาจารย์ท่านหนึ่งที่ผมรู้จักที่เคยกล่าวว่าเค้ารอดูวันที่การเขียนโปรแกรมสำหรับควอนตัมคอมพิวเตอร์จะเหมือนกับการเขียนโปรแกรมแบบปกติอยู่
คำว่าเหมือนกับการเขียนโปรแกรมปกติในที่นี้คือการที่โปรแกรมเมอร์ไม่มีความจำเป็นต้องสนใจอัลกอริธึมในระดับบิทนั่นเอง
ในปัจจุบันการเขียนโปรแกรมเพื่อใช้ประโยชน์จากควอนตัมคอมพิวเตอร์ โปรแกรมเมอร์ยังคงต้องโปรแกรมอัลกอริธึมในระดับคิวบิทอยู่
ซึ่งหากเทียบกับในคอมพิวเตอร์ปกติก็คือระดับบิทนั่นแหละ

หลังจากคิดถึงคำถามนี้ของอาจารย์ได้สักพัก บวกกับการลงมือเขียนควอนตัมโปรแกรมแบบเป็นชิ้นเป็นอัน
ทำให้ผมเริ่มสังเกตถึงความเหมือนและความต่างระหว่างคอมพิวเตอร์และควอนตัมคอมพิวเตอร์จากมุมมองทางด้านวิศวกรรมคอมพิวเตอร์ขึ้นมา เช่น
"เราสามารถคำนวณการคำนวณปกติโดยใช้ควอนตัมคอมพิวเตอร์ได้ไหม ถ้าทำได้ ทำได้อย่างไร (บวกเลข คูณเลข ฯลฯ)",
"ในขณะที่คอมพิวเตอร์ปกติจะทำการคำนวณทีละไม่เกิน 32 หรือ 64 บิท แต่ก็สามารถหาผลลัพธ์ได้เป็นล้านบิท ทำไมการคำนวณทางควอนตัมกลับต้องทำทีเดียวพร้อมกันทุกคิวบิท",
"ทำไมเราสามารถใช้ภาษาระดับสูงในการโปรแกรมคอมพิวเตอร์ปกติได้ แต่เรายังต้องเขียนโปรแกรมในระดับคิวบิทบนควอนตัมคอมพิวเตอร์อยู่", และ
"ถ้าเราสามารถใช้ภาษาระดับสูงเขียนควอนตัมโปรแกรมได้ หลังจากคอมไพล์แล้ว ภาษาเครื่องของควอนตัมคอมพิวเตอร์จะเหมือนหรือต่างกับของคอมพิวเตอร์ปกติอย่างไร" เป็นต้น

ในซีรีย์นี้ผมจะเขียนอธิบายคำตอบที่ได้มาจากค้นคว้าละลองเขียนควอนตัมโปรแกรมของผม ในบางส่วน ซีรีย์นี้จะคล้ายกับวิชาการคำนวณทางควอนตัมเบื้องต้น
แต่มันก็จะไม่ลงลึกไปถึงควอนตัมอัลกอริธึมที่ซับซ้อนมาก ๆ อย่าง Simon's , Grover's หรือ Shor's
ทั้งหมดทั้งมวลที่ผมจะอธิบายในซีรีย์นี้นั้นก็เพียงเพื่อตอบคำถามและอธิบายข้อสังเกตของผมที่มีไปเบื้องต้น

และจากที่ได้เห็นไปแล้วในข้อสังเกตของผมข้างต้น ผมจะถือเอาว่าผู้อ่านพอจะมีความรู้ความเข้าใจทางวิศกรรมคอมพิวเตอร์ในระดับพื้นฐานอยู่แล้ว
โดยเฉพาะการคำนวณในคอมพิวเตอร์โดยใช้วงจรดิจิตอล ความรู้พื้นฐานการเขียนและการคอมไพล์โปรแกรม นอกจากนี้ในซีรีย์ช่วงต้นยังจะมี
ในแต่ละโพสต์อาจจะมีการข้ามคำอธิบายทางเทคนิคและคณิตศาสตร์พื้นฐานบางอย่าง
ผมจึงคิดว่าเนื้อหาในซีรีย์นี้เหมาะกับคนที่มีประสบการณ์ทางด้านวิศวกรรมคอมพิวเตอร์ในระดับหนึ่ง เช่น เคยเรียนระบบดิจิตัล สถาปัตยกรรมคอมพิวเตอร์ หรือทฤษฎีการคำนวณ เป็นต้น
ทั้งนี้ผมจะพยายามอธิบายเรื่องพื้นฐานที่จำเป็นอย่างสุดความสามารถในแต่ละโพสต์ครับ

## โครงร่าง

- บทนำ: Quantum Computing กับอีกหนึ่งมุมมอง
- บทที่ 1: บิทและคิวบิท
- บทที่ 2: เบื้องหลังการคำนวณ
- บทที่ 3: ความได้เปรียบทางควอนตัม
- บทที่ 4: ข้อจำกัดของควอนตัมคอมพิวเตอร์ในยุค NISQ
- บทที่ 5: การออกแบบอัลกอริธึม
- บทที่ 6: การเขียนโปรแกรมหลังยุค NISQ

ในบทที่หนึ่ง เราจะพูดถึงความหมายของบิทในคอมพิวเตอร์ปกติและคิวบิทในควอนตัมคอมพิวเตอร์ รวมถึงอธิบายความต่างระหว่างสองสิ่งนี้
โดยในโพสต์จะมีการใช้เรื่องพีชคณิตเชิงเส้นและจำนวนเชิงซ้อนในการช่วยอธิบาย
เมื่อเข้าใจถึงความหมายและความแตกต่างของบิทและคิวบิทแล้ว ในบทที่สอง เราจะตอบคำถามที่ว่า เกิดอะไรขึ้นเมื่อเรารันโปรแกรม ๆ หนึ่งในคอมพิวเตอร์
โดยเราจะแสดงให้เห็นถึงเบื้องหลังการคำนวณโดยใช้พีชคณิตบูลีนและพีชคณิตเชิงเส้น
และก่อนที่ซีรีย์นี้น่าเบื่อมากเกินไป เราจะใช้บทที่สามในการแสดงให้เห็นว่าการคำนวณทางควอนตัมสามารถเอาชนะการคำนวณแบบปกติได้อย่างไร โดยยกตัวอย่างปัญหาและอัลกอริธึมง่าย ๆ
เพื่อให้ผู้อ่านมองเห็นภาพ บทที่สี่แนะนำให้ผู้อ่านรู้จักกับยุคปัจจุบันของควอนตัมที่เราเรียกว่ายุค NISQ (Noisy Intermediate-Scale Quantum)
และข้อจำกัดของควอนตัมคอมพิวเตอร์ในยุคนี้ ในบทที่ห้า ผู้อ่านจะได้เข้าใจถึงการออกแบบควอนตัมอัลกอริธึมในยุคปัจจุบัน หรือยุค NISQ
และทำไมมันถึงได้ต่างจากการออกแบบอัลกอริธึมแบบปกติมากนัก สุดท้ายในบทที่หก ผมได้คาดการณ์ถึงความเป็นไปได้ของการเขียนโปรแกรมสำหรับควอนตัมคอมพิวเตอร์หลังยุค NISQ ไว้

## ส่งท้าย

ผมหวังมากว่าจะสามารถเขียนซีรีย์นี้ให้คนอ่านเข้าใจได้ง่ายที่สุด และหากผู้อ่านคนไหนมีคำถามก็สามารถส่งอีเมล์มาได้ตามที่อยู่ท้ายหน้าเว็บเลยครับ ^o^

---

<br />
### คำทับศัพท์

- อัลกอริธึม = Algorithm
- บิท = Bit
- คอมพิวเตอร์ = Computer
- ควอนตัม = Quantum
- คิวบิท = Qubit
- ควอนตัมคอมพิวติง = Quantum Computing

### คำแปล

- การคำนวณทางควอนตัม = Quantum Computation
- การคำนวณแบบปกติ = Classical Computation
- พีชคณิตบูลีน = Boolean Algebra
- พีชคณิตเชิงเส้น = Linear Algebra
- จำนวนเชิงซ้อน = Complex Numbers
- ทางตรรกะ = Logical
- โมเดลวงจร = Circuit Model
- ระบบดิจิตัล = Digital Systems
- สถาปัตยกรรมคอมพิวเตอร์ = Computer Architecture
- ทฤษฎีการคำนวณ = Theory of Computation
- ตัวจำลองควอนตัมคอมพิวเตอร์ = Quantum Computer Simulator