# Security Testing Guide

## Running Security Tests

This guide explains how to run the security tests for Le Coeur du Dragon.

### Server-Side Security Tests

The server-side security tests validate input sanitization and protection against XSS attacks.

```bash
# Navigate to project root
cd /home/runner/work/lecoeurdudragon/lecoeurdudragon

# Run server-side security tests
node tests/server-security.test.js
```

Expected output:
```
Testing server-side input sanitization...

✓ Test 1: Valid score data passed
✓ Test 2: XSS prevention passed
✓ Test 3: Name length validation passed
✓ Test 4: Empty name validation passed
✓ Test 5: Level validation passed
✓ Test 6: Required fields validation passed

✅ All server-side security tests passed!
```

### Test Coverage

The security tests cover:

1. **Valid Input Acceptance**: Ensures legitimate player names are accepted
2. **XSS Prevention**: Tests that HTML/script tags are properly sanitized
3. **Length Validation**: Verifies names exceeding 20 characters are rejected
4. **Empty Input Rejection**: Ensures empty or whitespace-only names are rejected
5. **Data Type Validation**: Validates that numeric fields are numbers
6. **Required Field Validation**: Checks that required fields are present

### Manual Security Testing

To manually test XSS prevention:

1. Start the game
2. Try to enter a player name with HTML tags: `<script>alert('XSS')</script>Hero`
3. Verify that the tags are removed and only "Hero" is stored
4. Check the leaderboard - the name should display safely without executing scripts

### CodeQL Security Scanning

We use GitHub's CodeQL for automated security scanning:

```bash
# CodeQL is automatically run as part of CI/CD
# You can also run it locally if you have CodeQL CLI installed
codeql database create codeql-db --language=javascript
codeql analyze codeql-db --format=sarif-latest --output=results.sarif
```

### NPM Audit

Check for vulnerabilities in dependencies:

```bash
# Check main dependencies
npm audit

# Check server dependencies
cd server
npm audit
```

### Security Checklist

Before deploying:

- [ ] All security tests pass
- [ ] NPM audit shows no vulnerabilities
- [ ] CodeQL scan completed
- [ ] CSP headers configured
- [ ] HTTPS enabled in production
- [ ] Rate limiting active
- [ ] Input sanitization verified
- [ ] Safe DOM methods used for user content display

### Reporting Security Issues

If you discover a security vulnerability, please refer to `SECURITY.md` for responsible disclosure procedures.

---

Last Updated: 2024
