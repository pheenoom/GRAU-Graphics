#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

const vec4 yellow = vec4(1.0, 1.0, 0.0, 1.0);
const vec4 red = vec4(1.0, 0.0, 0.0, 1.0);

void main()
{
    float f = fract(vtexCoord.s);    
    int frame = int(f * 9.0); // [0..8]
    if (frame == 1 || frame == 3 || frame == 5 || frame == 7) {
        fragColor = red;    
    }
    else {
        fragColor = yellow;    
    }    
}
