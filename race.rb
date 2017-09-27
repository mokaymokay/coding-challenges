# Given two speeds v1 (A speed, integer > 0) and v2 (B speed, integer > 0) and
# a lead g (integer > 0) how long will it take B to catch A? The result will be
# an array [h, mn, s] where h, mn, s is the time needed in hours, minutes and
# seconds (don't worry for fractions of second). If v1 >= v2 then return nil,
# nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim.
# e.g. race(720, 850, 70) => [0, 32, 18]
# e.g. race(80, 91, 37) => [3, 21, 49]

def race(v1, v2, g)
  return nil if v1 >= v2
  # solves problem in lowest unit of measurement, seconds
  s = 3600 * g / (v2 - v1)
  h = s / 3600
  s = s - 3600 * h
  mn = s / 60
  s = s - 60 * mn
  p [h, mn, s]
end

race(720, 850, 70)
race(80, 91, 37)
