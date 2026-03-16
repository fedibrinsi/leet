# IDOR CTF Challenge Writeup

## Challenge Overview

The challenge presents a futuristic student portal where users can log in with a Student ID and view their academic records. The portal restricts access to Student IDs 1–4 via the login form, but hints suggest there is a hidden profile belonging to a mysterious "Creator of Timelines." The goal is to find and access this secret profile and retrieve the flag.

---

## Step 1: Exploring the Portal

Upon visiting the portal, you see a login form that only accepts Student IDs from 1 to 4. After logging in as any of these users, you are redirected to a URL like:

```
/student/1
```

You can view the profile and grades for that student.

---

## Step 2: Looking for Vulnerabilities

The challenge description and hints suggest an **IDOR (Insecure Direct Object Reference)** vulnerability. This means that access control is likely enforced only on the frontend, not on the backend.

---

## Step 3: Testing the IDOR
Leet means 1337 which means ELITE.

After logging in as a normal student, try changing the URL in your browser from:

```
/student/1
```
to
```
/student/1337
```

---

## Step 4: Accessing the Secret Profile

When you visit `/student/1337`, you are presented with a special profile:  
**THE ARCHITECT OF REALITIES**  
This profile is not listed in the student directory and cannot be accessed via the login form.

---

## Step 5: Retrieving the Flag

Within the secret profile, you find a section labeled "Secret Notes" containing the flag:

```
CyberQuest{1D0R_Unl0ck3d_Th3_F0rb1dd3n_D1m3ns10n_FST}
```

---

## Conclusion

The vulnerability was caused by insufficient backend access control. By manipulating the Student ID in the URL, you could access data not intended for you, demonstrating a classic IDOR flaw.

---

## Flag

```
CyberQuest{1D0R_Unl0ck3d_Th3_F0rb1dd3n_D1m3ns10n_FST}
```
