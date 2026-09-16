# SET_NODE_ENV_PRODUCTION.ps1
# Sets NODE_ENV=production globally in Windows User environment
# This is a ONE-TIME fix required to resolve the build issue

Write-Host "╔════════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║  SET NODE_ENV=production (Global User Environment Variable)   ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

Write-Host "Current environment:" -ForegroundColor Yellow
$currentNodeEnv = [Environment]::GetEnvironmentVariable('NODE_ENV', 'User')
if ($currentNodeEnv) {
    Write-Host "  USER NODE_ENV = $currentNodeEnv"
} else {
    Write-Host "  USER NODE_ENV = (not set)"
}

Write-Host ""
Write-Host "Setting NODE_ENV=production globally..." -ForegroundColor Green

try {
    [Environment]::SetEnvironmentVariable('NODE_ENV', 'production', 'User')
    Write-Host "✅ SUCCESS: NODE_ENV=production has been set in User environment" -ForegroundColor Green
} catch {
    Write-Host "❌ ERROR: Could not set environment variable" -ForegroundColor Red
    Write-Host "  This script may need to run as Administrator" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "NEXT STEPS:" -ForegroundColor Cyan
Write-Host "1. Close this PowerShell window"
Write-Host "2. Open a NEW PowerShell window (to reload environment)"
Write-Host "3. Verify: `echo `$env:NODE_ENV` should show 'production'"
Write-Host "4. cd E:\git\interno\ioranaseo"
Write-Host "5. pnpm build  (should now pass)"
Write-Host ""
Write-Host "After verification, FASE 6 can proceed (legacy elimination)" -ForegroundColor Green
Write-Host ""
